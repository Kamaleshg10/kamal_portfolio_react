import React from 'react';

export const Slider = () => {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-Light slide" data-bs-ride="carousel">          
            <div className="carousel-inner">
                <div className="carousel-item active" >   
                    {/* <video src="img/smoke.mp4" autoPlay loop muted /> */}
                    <video src="img/smoke.mp4" autoPlay loop muted />
                    {/* <img src="img/slide1.jpg" className="d-inline-block w-100 " alt="images"/> */}
                    <div className="carousel-caption  d-none d-md-block">
                        <p className="fw-bold banner-text ">
                            <span className='banner-main-text text-light'>Hi, I'm kamalesh</span>                    
                        </p>
                        <p className='text-primary fw-bold sub-banner-text '>W<span className='shadow text-light'>eb</span>&nbsp;    
                            <span className='text-primary'>D</span><span className='shadow-lg text-light'>eveloper </span>
                        </p>
                   </div>
                </div>
            </div>                 
       </div>
  </>
  )
}
