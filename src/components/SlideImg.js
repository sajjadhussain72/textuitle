import React from 'react'

export default function SlideImg() {
  return (
    <div className='container'>
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
     <div className="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
      <img src='...' alt="..."/>
     </div>
      <div className="carousel-item">
        <img src='...' class="d-block w-100" alt="..."/>
      </div>
   </div>
    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next"  type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
       <span className="carousel-control-next-icon"  aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
    </button>
  </div>
  
    </div>
  )
}
