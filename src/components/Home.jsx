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
      <Navbar />
      <div>        
        <Slider />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <p className="fw-bold banner-text">
                  <span className='banner-main-text shad'>Hi, I'm kamalesh</span> <br />
                  <span className='text-primary'>W</span><span className='shadow'>eb</span> - <span className='text-primary'>D</span><span className='shadow'>eveloper</span>
                </p>
                <p className="sub-para text-dark fw-normal m-4">Emphasize their ability to create responsive designs, collaborate with back-end developers, and utilize version control systems to improve website performance and user experience.</p>
                {/* <div className="underline mx-auto"></div> */}
                
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

