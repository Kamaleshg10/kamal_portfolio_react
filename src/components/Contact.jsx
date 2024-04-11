import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <>
      <section className="py-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact</h4>              
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
              <Link to='/'>Home </Link> / 
                <Link to='/about'> About</Link> /
                <Link to='/skills'> Skills</Link> /
                <Link to='/Portfolio'> Portfolio</Link> /
                <Link to='/contact'> Contact</Link> 
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className="container">
          <div className='card shadow'>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h6>Contact Me</h6>
                  <hr />
                  <div className="form-group py-1">
                    <input type="text" placeholder='Enter Name' className='form-control' />
                  </div>
                  <div className="form-group py-1">
                    <input type="email" placeholder='Enter E-mail' className='form-control' required />
                  </div>
                  <div className="form-group py-1">
                    <textarea rows="3" placeholder=' Type your Message' className='form-control' ></textarea>
                  </div>                 
                  <div className="form-group py-3">
                    <button type="button"  className='btn btn-warning' >Send Message</button>
                  </div>                   
                </div>
                {/* <div className="col-md-6 border-start">
                      <h5 className='main-heading'>Address Information</h5>
                      <div className="underline"></div>                    
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
