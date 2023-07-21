import React from 'react'
import "./seller.css"
import blogData from '../../assets/data/blogData'

const Seller = () => {
  return (
    <div className='seller section'>
<div className='seecontainer container'>
<div className='seeheading grid'>
<h3 className='seetitle'>Explore top seller in town</h3>

<p>Joseph Samuel hold the guiness World Record  for being the greatest salesman in th world. </p>
</div>

<div className='sellercontainer grid'>
{
 blogData.map((e)=>(
  <>
   <div className='singleseller grid'>
  <div className='imgdiv2 grid'>
<img src={e.imgUrl} alt='' className='logoseller flex' />
  </div>
<span className='info'>
<h4 className='name'>{e.title}</h4>
<p>from $600</p>
</span>

</div>
  </>
 ))

}

</div>

</div>
</div>
  )
}

export default Seller