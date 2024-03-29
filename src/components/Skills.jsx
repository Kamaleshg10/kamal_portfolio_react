import React from 'react'
import { Link } from 'react-router-dom'

export const Skills = () => {
  return (
    <>
        <section className="py-3 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Skills</h4>              
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

      {/* <section className='section bg-light border-bottom'>
        <div className="container">
          <h5 className='main-heading'>Our Company</h5>
          <div className="underline"></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat sapiente autem vita</p>
        </div>
      </section> */}
      <section className='section '>
        <div className="container">
          <div className='card shadow bg-secondary '>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 ">
                  <h6 className='sub-heading'>Programming Languages</h6>
                  <div className="underline"></div>
                  {/* <hr /> */}
                        <div><p className="text-white mb-1">HTML5</p></div>
                        <div><p className="text-white mb-1">CSS3</p></div>
                        <div><p className="text-white mb-1">JavaScript(Intermediate)</p></div>
                        <div><p className="text-white mb-1">Python(begginer)</p></div>
                  </div>
                  <div className="col-md-4 ">
                  <h6 className='sub-heading'> Framework / Libraries</h6>
                  <div className="underline"></div>
                  {/* <hr /> */}
                        <div><p className="text-white mb-1">Bootstrap</p></div>
                        <div><p className="text-white mb-1">React.js(begginer)</p></div>
                  </div>
                  <div className="col-md-4 ">
                  <h6 className='sub-heading'>Tools</h6>
                  <div className="underline"></div>
                  {/* <hr /> */}
                        <div><p className="text-white mb-1">Visual Studio Code</p></div>
                        <div><p className="text-white mb-1">Git</p></div>
                        <div><p className="text-white mb-1">github</p></div>
                  </div>                
                  </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
