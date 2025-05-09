import React from 'react';
import logo from '/logo1.png'
import flier from '../assets/bg.jpg'
import ImageUpload from './ImageUpload'
import {Facebook, Instagram, Globe } from 'lucide-react'


const Getdp = () => {
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
                    <div className="graphics flex justify-center items-center bg-[#2A1A3A] shadow-lg rounded-lg p-6 h-full ">
                            <img className="w-full h-auto max-h-96 object-contain rounded" src={ flier } alt="Chasers DP"/>
                        </div>

                        {/* Form Input section */}
                      <div className="p-2 h-full">
                          
                            <form action="" className="flex flex-col space-y-16 w-full" method="POST">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-yellow-600 font-medium" htmlFor="name">Name</label>
                                    <input name="name" placeholder="Kindly input your name" type="text" className="w-full p-3 rounded-lg bg-[#1F112D] hover:bg-secondary border-2 border-gray-700 focus:border-yellow-600 focus:outline-none"/>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label className="text-yellow-600 font-medium" htmlFor="image">Upload Image</label>
                                    <ImageUpload />
                                    
                                </div>  
                          </form>

                        </div>
                  </div>
                    

                  {/* Download Button */}

                    <div className="text-center bg-yellow-600 py-4 px-2 md:px-6 lg:px-6 rounded-lg hover:bg-yellow-700 hover:scale-105 transition-transform transform">
                        <button className="download font-semibold">Download Your Chasers-DP</button>
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
