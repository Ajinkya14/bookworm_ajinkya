
import Book from './Book';
import React from 'react';
import { useState, useEffect } from "react";
import Navigationbar from './Navigationbar';

export default function Shelf() {

  const uid=sessionStorage.getItem("UserId");
  const [data, setData] = useState([]);
  const [fdata, setFdata] = useState([]);
 
 useEffect(() => 
 {
    
    const url='http://localhost:8080/crud/shelf/'+uid;
  
    // fetch('./trial2.json')
    fetch(url)
        .then(res => res.json())
        .then((result) => { setData(result);
            setFdata(result)  }
        );
        console.log('fetching')
      console.log(data);
      console.log(fdata);
  
},[]);

    const radioHandler=(mode)=>
    {
      console.log('inside');
      if (mode==='purchase') {
        setFdata(data.filter((elem)=>elem[0].tranType==="p"));}
      else if (mode==='rent') {
        setFdata(data.filter((elem)=>elem[0].tranType==="r"));
      }
      else{
        setFdata(data.filter((elem)=>elem[0].tranType==="l"));
      }

    }
  return (
    <><Navigationbar/>
    <div style={{paddingTop:"20px"}}>

     
         <div className="w3-container w3-text-grey" id="jeans" >
            <p className="col-sm-12" align="center">
                <input type="radio"  name="mode" id="purchase" value='purchase'onChange={(event)=>radioHandler(event.target.value)}/> Purchased Books&nbsp;
                <input type="radio"  name="mode" id="rent" value='rent' onChange={(event)=>radioHandler(event.target.value)}/> Rented Books &nbsp;
                <input type="radio" name="mode" id="lent" value='lent'onChange={(event)=>radioHandler(event.target.value)}/> Lended Books&nbsp;
            </p>
            <hr/>
        </div>

         
            <Book    d={fdata}/>

          </div>
          </>
          );

}

