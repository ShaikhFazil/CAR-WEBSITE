import React from 'react'
import "./auction.css"
import {BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs"
import buy from '../../assets/data/buy'



const Auction = () => {
  return (
    <div className='auction section'> 
    <div className='seecontainer container'>
<div className='secheading flex'>
<h3 className='seetitle'>
 Active Auctions
</h3>

<div className='navbtn flex'>
<BsArrowLeftShort className='icon lefticon' />
<BsArrowRightShort className='icon righticon' />
</div>

</div>

<div className='cartcontainer grid'>
 {
buy.map((e)=>(
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
   
   <div className='price_buybtn flex'>
   <span className='price'>
  ${e.price}
   </span>
   <span className='buybtn'>
   Buy Now
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

export default Auction