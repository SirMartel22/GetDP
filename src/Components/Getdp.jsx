import React from 'react';
import logo from '/logo1.png'
import flier from '../assets/bg.jpg'
import ImageUpload from './ImageUpload'


const Getdp = () => {
  return (
      <div className="main-container">
          
          {/* Navbar section */}
          <div className="nav">
              <nav className="h-40px w-full">
                  <ul className="link">
                      <li className="home">Home</li>
                      <li className="logo w-1/4">
                          <img className="h-[50px] w-[50px]" src={ logo } />
                      </li>
                      <li className="home">Register</li>
                  </ul>
                  
              </nav>
          </div>

          {/* Main section */}
          <div className="getdp-section container">
              <h2 className="">Get Your Chasers Conference Display Picture</h2>
              <p className=""> By uploading your picture, and filling in your name,
                  you'll be able to download a display picture you can post on social media platform
                  for the upcoming Chasers Conference </p>
              
              {/* Flier Section */}
              <div className="form-flier-container">
                  
                    <div className="graphics w-1/2 py-24 px-24">
                        <img className="w-24 h-48 lg-w-24 lg-h-48" src={ flier } />
                    </div>

                    {/* Form Input section */}
                    <div className="flexcard">
                        <form action="" className="" method="POST">
                          <label htmlFor="name">Name</label>
                          <input name="name" type="text" />
                          
                          <label htmlFor="name">Upload Image</label>
                          {/* <input name="image" type="file"/> */}
                          <ImageUpload />
                        </form>
                    </div>

                
              </div>

            {/* Download Button */}

            <div>
                 <button className="download btn">Download Your Chasers-DP</button>
            </div>

          </div>

         

          {/* Footer Section */}
          
          <div className="footer">
              
          </div>

      
    </div>
  );
}

export default Getdp;
