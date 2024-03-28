import React from 'react';
import { Slider } from './Slider';
import { Link } from 'react-router-dom';
import { Vmc } from './Vmc';
import { Service } from './Service';
import { Navbar } from './Navbar';

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
                <h3 className="main-heading">Our Company</h3>
                <div className="underline mx-auto"></div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat sapiente autem vitae deleniti blanditiis obcaecati explicabo ipsa illo, doloremque reprehenderit expedita dolores dolor deserunt porro velit quisquam ab provident!
                </p>
                <Link to='/about' className='btn btn-warning shadow' >Read More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* our vision mission  */}

          <Vmc />

          {/* our vision mission  */}

          <Service />
      </div>

      
    </>
  );
};

