import React from 'react';
// import video from '../assets/bg1.mp4'

export const Slider = () => {
  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-Light slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">                
                {/* <video src="video/bg1.mp4" autoPlay loop /> */}
                {/* <video src={video} autoPlay loop /> */}
                <img src="img/slide1.jpg" className="d-inline-block w-100 " alt="images"/>
                {/* <div className="carousel-caption  d-none d-md-block">
                    <h5 className='text-white'>First slide label</h5>
                    <p className='text-white'>Some representative placeholder content for the first slide.</p>
                </div> */}
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                {/* <video src="video/bg4.mp4" autoPlay loop  /> */}
                <img src="img/slide2.jpg" className="d-inline-block w-100 " alt="images"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-white'>Second slide label</h5>
                    <p className='text-white'>Some representative placeholder content for the second slide.</p>
                </div> */}
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                {/* <video src="video/bg3.mp4" autoPlay loop /> */}
                <img src="img/slide3.jpg" className="d-inline-block w-100" alt="images"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h5 className='text-white'>Third slide label</h5>
                    <p className='text-white'>Some representative placeholder content for the third slide.</p>
                </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
  </>
  )
}
