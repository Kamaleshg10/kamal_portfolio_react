import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
        <section className="section pt-3 pb-1 text-white footer " >
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center icon my-2">
                <h6>Other Informaton</h6>
                <hr />       
                <Link to='http://www.facebook.com' ><IoLogoFacebook className='mx-3 fs-1' /></Link>         
                <Link to='http://www.youtube.com'><FaYoutube className='fs-1 mx-3' /></Link>         
                <Link to='http://www.linkedin.com'><FaLinkedin className='mx-3 fs-1' /></Link>         
                <Link to='http://www.twitter.com'><FaSquareXTwitter className='mx-3 fs-1' /></Link>
              </div>
               <div className="col-md-4 my-2 ">
                    <h6 className='text-center'>Quick links</h6>
                    <hr />
                    <span className="quick">
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/contact'>Contact</Link></div>
                    <div><Link to='/skills'>Skills</Link></div>
                    </span>
               </div>
               <div className="col-md-4 my-2 text-center">
                <h6>Contact Information</h6>
                <hr />
                <div><p className="text-white my-3"><GrSend className='me-2' />kamaleshmech10@gmail.com</p></div>
                <div><p className="text-white mb-1"><IoMdCall className='me-2'/>+91 8883940989</p></div>
               </div>
            </div>
            <hr />
          </div>
          <div className="col-12 ">
                <h6 className='text-center'>&copy; Copyright 2024, kamalesh All Rights Reserved</h6>
          </div>
        </section>
    </>
  )
}
