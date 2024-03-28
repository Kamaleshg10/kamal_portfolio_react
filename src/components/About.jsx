import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
      <section className="py-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About us</h4>              
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
              <Link to='/'>Home </Link> / 
                <Link to='/about'> About</Link> /
                <Link to='/skills'> Skills</Link> /
                <Link to='/contact'> Contact</Link>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section bg-light border-bottom'>
        <div className="container">
          <h5 className='main-heading'>Our Company</h5>
          <div className="underline"></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat sapiente autem vita</p>
        </div>
      </section>
    </>
  )
}
