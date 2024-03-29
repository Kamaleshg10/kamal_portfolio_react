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
                {/* <h3 className="main-heading">Our Company</h3> */}
                {/* <div className="underline mx-auto"></div> */}
                <p className="main-heading fs-2 bold">
                  Hello, hi I am kamalesh <br />
                  I am a Web developer <br />
                  I learn to more
                </p>
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

