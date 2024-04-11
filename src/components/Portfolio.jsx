import React from 'react'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <>
      <section className="py-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Portfolio</h4>              
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
              <Link to='/'>Home </Link> / 
                <Link to='/about'> About</Link> /
                <Link to='/skills'> Skills</Link> /
                <Link to='/Portfolio'> Portfolio</Link> /
                <Link to='/contact'> Contact</Link> /
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
                  <h6>Portfolio </h6>
                  <hr />
                  <h6 className='sub-heading text-dark'>personal protfolio website</h6>
                  <div className="underline"></div>
                  {/* <hr /> */}
                        <div><p className="fs-5 mb-1">visit</p></div>
                        <div><a href='https://kamaleshg.netlify.app/' className="fs-6 mb-1 text-primary">https://kamaleshg.netlify.app/</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
