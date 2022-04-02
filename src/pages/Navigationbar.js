import React, { useEffect, useState,useForceUpdate ,Redirect} from "react";
import { useRef } from "react";
import {Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate, useParams} from "react-router-dom";
import NaviBar from "./NaviBar";
import PublisherNav from "./PublisherNav";
import UserNav from "./UserNav";


function Navigationbar()
{
   const [uuid,setuuid]=useState(0);
   const [rrid,setrrid]=useState(0);
  const [isLoggedIn,setisLoggedIn]=useState(false);
  const [count,setCount]=useState(0);
  
  

  
  useEffect(()=>{ 
 setuuid(sessionStorage.getItem("UserId"));
setrrid(sessionStorage.getItem("RoleId"));
setisLoggedIn(sessionStorage.getItem("IsLoggedIn"));

  }
  )

  // function PPP(){
  //   setCount(count+1);
  // }
function removeUser(){
  sessionStorage.removeItem("UserId");
  sessionStorage.removeItem("RoleId");
   sessionStorage.removeItem("IsLoggedIn");

}
if(isLoggedIn&&rrid==2)
{
return (<PublisherNav isLoggedIn={isLoggedIn} rrid={rrid} removeUser={removeUser}/>);
}
if(isLoggedIn&&rrid==1)
{
return (<UserNav isLoggedIn={isLoggedIn} rrid={rrid} removeUser={removeUser}/>);
}
else{
  return(<NaviBar isLoggedIn={isLoggedIn} rrid={rrid} removeUser={removeUser}/>)
}

       
}
export default Navigationbar;

