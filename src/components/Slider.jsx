import React from 'react';

export const Slider = () => {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-Light slide" data-bs-ride="carousel">          
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <video src="img/smoke.mp4" className='object-fit-sm-contain' autoPlay loop muted />
                    {/* <video src="img/smoke.mp4" className='object-fit-cover' title="YouTube video" autoplay /> */}
                    {/* <img src="img/slide1.jpg" className="d-inline-block w-100 " alt="images"/> */}
                    <div className="carousel-caption col-xs-4">
                        <p className="fw-bold banner-text ">
                            <span className='banner-main-text text-light '>Hi, I'm kamalesh</span>                    
                        </p>
                        <p className='text-primary fw-bold sub-banner-text '>W<span className='shadow text-light'>eb</span>&nbsp;    
                            <span className='text-primary'>D</span><span className='shadow-lg text-light'>eveloper </span>
                        </p>
                   </div>
                   {/* <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div > */}
                </div>
            </div>                 
       </div>
  </>
  )
}
