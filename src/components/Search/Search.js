import React from 'react'
import "./search.css"
import {FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='search'>
<div className='seecontainer container'>
  <h3 className='title'>Which Vehicle are looking for?</h3>

<div className='searchdiv '>
  <input type='text' placeholder='Type' />
  <input type='number' placeholder='Year' />
  <input type='text' placeholder='Model' />
  <input type='number' placeholder='Price' />
  <button className='btn3 primarybtn'>
    <span className='flex'>
    <FiSearch className='icon flex ff' />
    <span style={{color:"black", padding:'5px'}}>Search</span>
    </span>
  </button>
</div>

</div>

    </div>
  )
}

export default Search