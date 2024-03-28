import React from 'react'
import { Link } from 'react-router-dom'

export const Service = () => {
  return (
    <>
        <section className="section pt-5 pb-4 bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <h3 className="main-heading">Our Services</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">   
                    <img src="img/placeholder-image.png" className='card-img-top d-flex w-75 ' alt="" />                 
                    <div className="card-body">
                        <h6>Service 1</h6>
                        <div className="underline"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur eserunt porro velit quisquam ab provident!</p>                
                        <Link to='service' className='btn btn-link'>read more</Link>
                    </div>
                </div>
              </div>          
              <div className="col-md-4">
                <div className="card shadow">   
                    <img src="img/placeholder-image.png" className='card-img-top d-flex w-75 ' alt="" />                 
                    <div className="card-body">
                        <h6>Service 1</h6>
                        <div className="underline"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur eserunt porro velit quisquam ab provident!</p>                
                        <Link to='service' className='btn btn-link'>read more</Link>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">   
                    <img src="img/placeholder-image.png" className='card-img-top d-flex w-75 ' alt="" />                 
                    <div className="card-body">
                        <h6>Service 1</h6>
                        <div className="underline"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur eserunt porro velit quisquam ab provident!</p>                
                        <Link to='service' className='btn btn-link'>read more</Link>
                    </div>
                </div>
              </div>                
            </div>
          </div>
        </section>
    </>
  )
}
