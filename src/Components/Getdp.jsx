import React from 'react';
import logo from '/logo1.png'

const Getdp = () => {
  return (
      <div className="">
          
          {/* Navbar section */}
          <div className="nav">
              <nav className="">
                  <ul className="">
                      <li className="home">Home</li>
                      <li className="logo">
                          <img src={ logo } />
                      </li>
                      <li className="home">Get Chasers DP</li>
                  </ul>
                  
              </nav>
          </div>

          {/* Main section */}
          <div className="getdp-section ">
              
            {/* Flier Section */}
              <div className="graphics">
                  <img />
              </div>

            {/* Form Input section */}
            <div className="form">
                  <form action="" className="" methof="POST">
                      
                      <input name="name" type="text" />
                      <input name="image" type="file/image"/>
                  </form>
            </div>

          </div>

          {/* Download Button */}
          <div>
              <button className="download btn">Download Your Chasers-DP</button>
          </div>


          {/* Footer Section */}
          
          <div className="footer">
              
          </div>

      
    </div>
  );
}

export default Getdp;
