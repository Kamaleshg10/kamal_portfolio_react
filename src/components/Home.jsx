import React from 'react';
import { Slider } from './Slider';
import { Link } from 'react-router-dom';
// import { Vmc } from './Vmc';
// import { Service } from './Service';
import { Navbar } from './Navbar';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Home = () => {
  return (
    <>
      
      <div>    
      <Navbar />    
        <Slider />        
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">              
                <p className="sub-para text-dark fw-normal m-4">Emphasize their ability to create responsive designs, collaborate with back-end developers, and utilize version control systems to improve website performance and user experience.</p>                
                <Link to='/about' className='btn btn-warning shadow' >Read More</Link>
              </div>
            </div>
          </div>
        </section>
        {/* our vision mission  */}
          {/* <Vmc /> */}
          {/* our vision mission  */}
          {/* <Service /> */}
      </div>

      
    </>
  );
};

