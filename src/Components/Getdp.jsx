import React, {useState, useRef, useEffect } from 'react';
import logo from '/logo1.png'
import flier from '../assets/bg.jpg'
import ImageUpload from './ImageUpload'
import { Facebook, Instagram, Globe } from 'lucide-react'



const Getdp = () => {

    const [name, setName] = useState(' ');
    const [userImage, setUserImage] = useState(null);
    const [editedFlierUrl, setEditedFlierUrl] = useState(null);
    const canvasRef = useRef(null);
    const flierImageRef = useRef(null);


    //Handele image upload from the ImageUpload Component

    const handleImageUpload = (image) => {
        setUserImage(image)
    }


    const generateCompositedImage = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        //set canvas dimesions to match the flier
        canvas.width = flierImageRef.current.width;
        canvas.height = flierImageRef.current.height

        // Draw the base flier
        ctx.drawImage(flierImageRef.current, 0, 0);

        //Define a circular area for user's photo in bottom right
        //Note: These Coordinate Should be adjusted based on your actual flier design
        const userImgX = canvas.width * 0.7; // Position at 70% from left
        const userImgY = canvas.height * 0.6; //Position at 60% from top
        const radius = canvas.width * 0.12; // size of the circular fram


        //Only draw user image if available
        if (userImage && userImage.preview) {
           
            //create circular clipping path
            ctx.save();
            ctx.beginPath();
            ctx.arc(userImgX, userImgY, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            
            //Draw user image within the clipping path
            const userImg = new Image();
            userImg.src = userImage.preview;
            userImg.onload = () => {
    
                const aspectRatio = userImg.width / userImg.height;
            
                let drawWidth, drawHeight;
    
                if (aspectRatio > 1) {
                    //Image is wider than tall
                    drawHeight = radius * 2;
                    drawWidth = drawHeight * aspectRatio;
                } else {
                
                    //Image is taller than wide
                    drawWidth = radius * 2;
                    drawHeight = drawWidth / aspectRatio;
    
                }
    
    
                ctx.drawImage(
                    userImg,
                    userImgX - drawWidth / 2,
                    userImgY - drawHeight / 2,
                    drawWidth,
                    drawHeight
                );
    
                ctx.restore();
    
                //Add the user's name if provided
                if (name.trim()) {
                    
                    ctx.font = 'bold 50px Montserrat';
                    ctx.fillStyle = '#ffffff';
                    ctx.textAlign = 'center';
                    ctx.fillText(name, canvas.width * 0.7, canvas.height * 0.8);
                }

                //Generate data url for the composite image
                setEditedFlierUrl(canvas.toDataURL('image / png'))
            };



            //Generate data URL for the composited image
            // setCompositedImage(canvas.toDataURL('image/png'));

        } else {
            // if no user image, just add name if provided
            if (name.trim()) {
                ctx.font = 'bold 28px Montserrat';
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.fillText(name, canvas.width * 0.7, canvas.height * 0.8);
            }

            
            //Generate data url for the composite image
            setEditedFlierUrl(canvas.toDataURL('image / png'))
        }
    
    };

        //Generate the composite image when both name and image are available
        useEffect(() => {
            if ((name.trim() || name === '') && userImage && flierImageRef.current) {
                generateCompositedImage()
            }
        }, [name, userImage]);



    //Load the flier image for reference
    useEffect(() => { 
        const img = new Image();
        img.src = flier;
        img.onload = () => {
            flierImageRef.current = img;
            if ((name.trim() || name === ' ' ) && userImage) {
                generateCompositedImage();
            }
        };
    }, [])

    const handleDownload = () => {
        if (!editedFlierUrl) {
            alert("Please Enter your name and upload an image first.")
            return;
        }

        //create download link
        const link = document.createElement('a');
        link.href = editedFlierUrl;
        link.download = `Chasers-Conference-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }


    return (
      <div className="py-8 px-4 md:px-12 lg:px-24">
          
          {/* Navbar section */}
          <div className="mb-16 border-b border-neutral-700/80 pb-8">
              <nav className="w-full">
                  <ul className="flex flex-row items-center justify-center gap-6 md:gap-12 ">
                      <li className="home cursor-pointer hover:text-yellow-600 transition">Home</li>
                      <li className="w-16 md:w-24 flex items-center justify-center">
                          <img className="h-12 w-12 md:h-16 md:h-16 object-contain " src={ logo } alt="Logo" />
                      </li>
                      <li className="register cursor-pointer hover:text-yellow-600 transition">Register</li>
                  </ul>
                  
              </nav>
            </div>
            
            {/* Hidden Canvas for Image processing */}
            <canvas ref={canvasRef} style={{display: 'none'}} />

          {/* Main section */}
          <div className="getdp-section py-2 px-2 md:py-12 md:px-8  lg:py-12 lg:px-8 space-y-8 mb-16 ">
              <div className="text-center mb-8 flex justify-center flex-col items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-600 mb-4">Get Your Chasers Conference Display Picture</h2>
                <p className="text-base max-w-2xl mx-auto text-neutral-300"> Kindly fill in the form below to get your Chasers DP
                </p>
              </div>
              
              {/* Flier Section */}
              <div className="form-flier-container bg-[#1f112d] shadow-lg rounded-lg px-4 py-8 md:px-12 md:py-12 lg:px-12 lg:py-12 flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16 ">
                        
                      {/* Flier container */}
                    <div className="graphics flex justify-center items-center p-6 h-full ">
                            <img
                                className="w-full h-auto max-h-96 object-contain shadow-lgrounded-lg"
                                src={editedFlierUrl || flier}
                                alt="Chasers DP" />
                        </div>

                        {/* Form Input section */}
                      <div className="p-2 h-full">
                          
                            <form action="" className="flex flex-col space-y-16 w-full" onSubmit={(e) => e.previewDefault()} method="POST">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-yellow-600 font-medium" htmlFor="name">Name</label>
                                    <input
                                        name="name"
                                        placeholder="Kindly input your name"
                                        type="text"
                                        // value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-3 text-neutral-400 rounded-lg bg-[#1F112D] hover:bg-secondary border-2 border-gray-700 focus:border-yellow-600 focus:outline-none" />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label className="text-yellow-600 font-medium" htmlFor="image">Upload Image</label>
                                    <ImageUpload onImageUploaded={handleImageUpload} />
                                    
                                </div>  
                          </form>

                        </div>

                        {/* Preview Section */}

                        {/* <div className="bg-[#2A1A3A] rounded-lg p-6 flex flex-col items justify-center">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Preview</h3>
                            {compositedImage ? (
                                <img
                                    src={compositedImage}
                                    alt="Preview of your Chasers DP"
                                    className="max-w-full max-h-96 rounded-lg shadow-lg"
                                />
                            ) : (
                                    <div className="w-full 6-64 flex items-center justify-center bg-[#1F112D] rounded-lg">
                                        <p className="text-gray-400">
                                            {name && userImage
                                                ? "Generating Preview..."
                                                : "Enter your name and upload an image to see a preview"
                                                
                                            }

                                        </p>
                                    </div>
                            ) }
                        </div> */}
                  </div>
                    

                  {/* Download Button */}

                    <div className="text-center bg-yellow-600 py-4 px-2 md:px-6 lg:px-6 rounded-lg hover:bg-yellow-700 hover:scale-105 transition-transform transform">
                        <button
                            className="download font-semibold"
                            onClick={handleDownload}
                            disable={!editedFlierUrl}>
                            Download Your Chasers-DP
                        </button>
                    </div>

              </div>

          
          </div>

         

          {/* Footer Section */}
          
          <div className="footer flex flex-col text-center gap-8 justify-center items-center border-t border-neutral-700/80 py-24">
              <div className="flex gap-4 ">
                  
                <Facebook color="white" strokeWidth={0.75} />
                <Instagram color="white" strokeWidth={0.75} />
                <Globe color="white" strokeWidth={0.75} />
              </div>
              
              <p>&copy; Chasers Conference 2025. All Rights Reserved </p>
          </div>

      
    </div>
  );
}

export default Getdp;
