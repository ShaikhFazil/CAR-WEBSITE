import React from 'react'
import "./footer.css"


const Footer = () => {

const foo = [
  {
    path:'/',
    dis:'How it Works'
  },
  {
    path:'/',
    dis:'Careers'
  },
  {
    path:'/',
    dis:'Affliates'
  },
  {
    path:'/',
    dis:'Media'
  },
]



const boo = [
  {
    path:'/',
    dis:'Add Vehicles'
  },
  {
    path:'/',
    dis:'Resource Center'
  },
  {
    path:'/',
    dis:'Bonds'
  },
  {
    path:'/',
    dis:'Release Date'
  },
]




const poo = [
  {
    path:'/',
    dis:'Recommendation'
  },
  {
    path:'/',
    dis:'Gift Card'
  },
  {
    path:'/',
    dis:'Top-Ups'
  },
  {
    path:'/',
    dis:'Selling'
  },
]



const soo = [
  {
    path:'/',
    dis:'Update for Covid-19'
  },
  {
    path:'/',
    dis:'Garages'
  },
  {
    path:'/',
    dis:'Help Center'
  },
  {
    path:'/',
    dis:'Trust & Safety'
  },
]



  return (
    <div className='footer'>
      <div className='footercontainer container'>
<div className='footermenudiv grid'>

  <div className='singlegrid'>
    <span className='footertitle'>About</span>
    <ul className='footerul grid'>
{
  foo.map((e)=>(
    <>
    <li className='footerli'>{e.dis}</li>
    </>
  ))
}

    </ul>
  </div>

  <div className='singlegrid'>
    <span className='footertitle'>Become Seller</span>
    <ul className='footerul grid'>
{
  boo.map((e)=>(
    <>
    <li className='footerli'>{e.dis}</li>
    </>
  ))
}

    </ul>
  </div>


  <div className='singlegrid'>
    <span className='footertitle'>Community</span>
    <ul className='footerul grid'>
{
  poo.map((e)=>(
    <>
    <li className='footerli'>{e.dis}</li>
    </>
  ))
}

    </ul>
  </div>



  <div className='singlegrid'>
    <span className='footertitle'>Booking Support</span>
    <ul className='footerul grid'>
{
  soo.map((e)=>(
    <>
    <li className='footerli'>{e.dis}</li>
    </>
  ))
}

    </ul>
  </div>




</div>

<div className='lowersection grid'>
  <p>2023 All right Reserved.</p>
  <blockquote>FAZIL SHAIKH PROJECT</blockquote>
</div>

      </div>
    </div>
  )
}

export default Footer