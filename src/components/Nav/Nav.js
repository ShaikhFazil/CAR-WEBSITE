import React from "react";
import "./nav.css";
import {AiFillCar} from "react-icons/ai"
import {MdCancel} from "react-icons/md"
import {TbGridDots} from "react-icons/tb"
import { useState } from "react";

const Nav = () => {
  const data = [
    {
      path: "/",
      locate: "Used Cars",
    },
    {
      path: "/",
      locate: "New Cars",
    },
    {
      path: "/",
      locate: "Auctions",
    },
    {
      path: "/",
      locate: "Sell",
    },
    
  ];

const[nav,setnav] = useState('navbar')

//Function to show nav bar on smaller screen width

const shownavbar = () =>{
  setnav('nav shownav')
}

//Function to remove nav bar on smaller screen width

const removenavbar = () =>{
  setnav('navbar')
}

//Function to add the background to th navbar when we scroll to certain height on the window

const [header,setheader] = useState('header')

const addbag = () =>{
  if(window.scrollY >= 20){
    setheader('header addbag')
  }
  else{
setheader('header')
  }
}

window.addEventListener('scroll',addbag)

  return (
    <div className={header}>
      <div className="logodiv">
        <div className="logo">
<AiFillCar/>
        </div>
      </div>

      <div className={nav}>
        <ul className="menu">
          <li className="listitem">
           {
            data.map((e)=>(
              <a href={e.path} className="link">{e.locate}</a>
            ))
           }
          </li>
        </ul>
{
  <MdCancel className="icon closeicon" onClick={removenavbar} />
}

      </div>

<div className="signup flex">
<div className="text">Sign-Up</div>
{<TbGridDots className="icon tooglenavicon" onClick={shownavbar} />}
</div>



    </div>
  );
};

export default Nav;
