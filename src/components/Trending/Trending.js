import React from 'react'
import "./trending.css"
import {BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs"
import carData from '../../assets/data/carData'

const Trending = () => {
  return (
    <div className='trending section'> 
    <div className='seecontainer container'>
<div className='secheading flex'>
<h3 className='seetitle'>
  Trensing Near You
</h3>

<div className='navbtn flex'>
<BsArrowLeftShort className='icon lefticon' />
<BsArrowRightShort className='icon righticon' />
</div>

</div>

<div className='cartcontainer grid'>
 {
carData.map((e)=>(
  <>
  
<div className='singlecar grid'>
   
   <div className='imgdiv'>
     <img src={e.imgUrl} alt="imh3" />
   </div>
   <h5 className='cartitle'>
   {e.carName}
   </h5>
   <span className='miles'>{e.speed}</span>
   <span className='awd'>
  {e.automatic} {e.brand}
   </span>
   
   <div className='price_seller flex'>
   <span className='price'>
  ${e.price}
   </span>
   <span className='sellers'>
   Best Seller
   </span>
   </div>
   
   
   </div>
  </>
))


 }

</div>



    </div>
     </div>
  )
}

export default Trending