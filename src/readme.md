<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Kamal</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">About us</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Skills</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Contact</a></li>            
            </ul>
          </div>
        </div>
      </nav>


      
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Roboto';
    -webkit-font-smoothing:'Roboto';
    -moz-osx-font-smoothing:'Roboto';
    font-style: normal;
}
:root{
    --color1:#5e3bee;
    --color2:#000;
    --color3:#fff;
    --color4:#e62872;
    --color5:#5e3bee;
    --color6:#1c1e53;
}
.btn{
    display: inline-block;
    padding:14px 32px ;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    line-height: 24px;
}
.btn-primary{
    color: var(--color3);
    background-color: var(--color1);
    border: 1px solid var(--color3);
}
.btn-primary:hover{
    color: var(--color1);
    background-color: var(--color3);
    border: 1px solid var(--color1);
}
lorem


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat sapiente autem vitae deleniti blanditiis obcaecati explicabo ipsa illo, doloremque reprehenderit expedita dolores dolor deserunt porro velit quisquam ab provident!


<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-ride="carousel" data-bs-interval="100">
                {/* <img src="img/slide1.jpg" className="d-inline-block w-100 " alt="images"/> */}
                <video src="video/black.mp4" autoPlay loop />
                <div className="carousel-caption  d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="100">
                <video src="video/group.mp4" autoPlay loop />
                {/* <img src="img/slide2.jpg" className="d-inline-block w-100 " alt="images"/> */}
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <video src="video/code.mp4" autoPlay loop />
                {/* <img src="img/slide3.jpg" className="d-inline-block w-100" alt="images"/> */}
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
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
        