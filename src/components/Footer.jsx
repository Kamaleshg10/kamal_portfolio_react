import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
        <section className="section pt-5 pb-4 bg-dark text-white footer" >
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h6>Company Informaton</h6>
                <p className='text-white align-left'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat sapiente autem vitae deleniti blanditiis obcaecati explicabo ipsa illo, doloremque reprehenderit expedita dolores dolor deserunt porro velit quisquam ab provident!
                </p>                
              </div>
               <div className="col-md-4">
                    <h6>Quick links</h6>
                    <hr />
                        <div><Link to='/'>Home</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div><Link to='/contact'>Contact</Link></div>
                        <div><Link to='/skills'>Skills</Link></div>
               </div>
               <div className="col-md-4">
                <h6>Contact Information</h6>
                <hr />
                <div><p className="text-white mb-1">Kamarajar Salai</p></div>
                <div><p className="text-white mb-1">kamaleshmech10@gmail.com</p></div>
                <div><p className="text-white mb-1">+91 8883940989</p></div>
               </div>
            </div>
          </div>
        </section>
    </>
  )
}
