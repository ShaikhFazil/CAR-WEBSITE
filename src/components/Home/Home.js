import React from 'react'
import "./home.css"
import firstpage from "../../assets/all-images/cars-img/mercedes-offer.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='seecontainer'>
<div className='hometext'>
  <span className='homespan'>
    Meet Your New Car
  </span>
  <h1 className='hometitle'>Honda CIVIC </h1>

  <div className='btn flex'>
<button className='btn2'>More Details</button>
<button className='btn primarybtn'>Test Drive</button>
  </div>
  
</div>

<div className='homeimage'>
<img  className="img" src={firstpage} alt='sec' />
</div>


      </div>
    </div>
  )
}

export default Home