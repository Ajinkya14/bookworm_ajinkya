import { Form, Button, Row, Col, InputGroup, Container } from "react-bootstrap";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Signup.css';
 
function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({roleId:1});
  const [customer, setCustomer] = useState({});

  const [usertype, SetUserType] = useState(true);
  

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    setUser(values => ({ ...values, [name]: value }))
  }

  

  const HandleSubmit=event=>
  {
    
            var url;
            if (user.roleId == 1)
            {
            url = "http://localhost:8080/crud/getUser/";
            console.log(url)
            event.preventDefault();
            fetch(url+user.userName)
          .then(res=>res.json())
          .then((result)=>{
            setCustomer(result)
            console.log(result)
            if(user.userName == result.userName && result.password == user.password)
            {
              sessionStorage.setItem("UserName", result.firstName);
              sessionStorage.setItem("UserId", result.userId);
              sessionStorage.setItem("RoleId", result.roleId);
              sessionStorage.setItem("IsLoggedIn",true)
              alert("You have successfully logged in !!!!")
              navigate("/Library",result)
            }
            else
            { 
                alert("Wrong Userid or password")
              console.log("hhhhhh");
              navigate("/Login")
            }
          })
          .catch(error => console.log('Form submit error: ', error));
            }
            if (user.roleId == 2)
            {
              url = "http://localhost:8080/crud/benificiarysearch/";
              console.log(url)
            event.preventDefault();
            fetch(url+user.userName)
          .then(res=>res.json())
          .then((result)=>{
            setCustomer(result)
            console.log(result)
            if(user.userName == result.userName && result.password == user.password)
            {
              sessionStorage.setItem("UserName", result.userName);
              sessionStorage.setItem("UserId", result.userId);
              sessionStorage.setItem("RoleId", 2);
              sessionStorage.setItem("IsLoggedIn",true)
              alert("You have successfully logged in !!!!")
              navigate("/Payment",result)
            }
            else
            { 
              console.log("hhhhhh");
              navigate("/")
            }
          })
          .catch(error => console.log('Form submit error: ', error));
            }         

  }
  



  const onButton = (event) => {
    alert(event.target.value)
    if (event.target.value == "user") {
      SetUserType(true);
      setUser({ roleId: 1 })

    }
    if (event.target.value == "publisher") {
      SetUserType(false);
      setUser({ roleId: 2 })
      alert(usertype);
    }
  };





  return (

    <div className="signup-form">
      <form onSubmit={HandleSubmit}>
        <div class="btn-group" >
          <button id="bt1" value="user" onClick={onButton} class="button">User</button>
          <button id="bt2" value="publisher" onClick={onButton} class="button">Publisher</button>
        </div>
        <h2>Log In</h2>
        <p>Please login here!</p>
<ChangeButton isClicked={usertype} handleChange={handleChange}/>
     </form>
      <div className="hint-text">Dont have an account? <a href="#">Signup Now</a></div>
      Customer: {customer.userName}
      Customer: {customer.userName}
    </div>

  );
}


const ChangeButton = (props) => {
  let {isClicked,handleChange} = props;
  if (!isClicked) 
  {
 return <>
        <div className="form-group">
          <input type="text" className="form-control" name="userName" placeholder="User ID" required="required"
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password"
            required="required" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-grad" >Log In</button>
        </div>

</>
;
  } 

else {
 return <>
 
 

        <div className="form-group">
          <input type="text" className="form-control" name="userName" placeholder="User ID" required="required"
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password"
            required="required" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-grad">Log In</button>
        </div>
      


     </>
        ;
}
 };

export default Login;


// import {Form,Button,Row,Col,InputGroup, Container} from "react-bootstrap";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Formik } from "formik";
// import * as yup from 'yup';
// import { useParams,useNavigate } from "react-router-dom";
// import { useState } from "react";
// import './Signup.css';


                
// function Login(){
//   const [user, setUser] = useState({roleId:1});
//   const [usertype,SetUserType]= useState(true);

//   let navigate = useNavigate();
 
//   const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setUser(values => ({ ...values, [name]: value }))
//   }
//   const handleSubmit = event => {
      
//   alert("on submit");
//       const url = 'https://localhost:44385/api/User_Details/'
//       const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(user)
//       };
//       fetch(url, requestOptions)
//           .then(response => {console.log('Submitted successfully');alert(response);})
//           .catch(error => console.log('Form submit error: ', error))
//           navigate("/")
//           console.log(user);
//           // event.preventDefault();
//     };

//   return (
//     <div class="signup-form">
        
//     <form onSubmit={handleSubmit}>
    
// 		<h2>Log In</h2>
// 		<p>Please login here!</p>
        
//         <div class="form-group">
//         	<input type="text" class="form-control" name="userId" placeholder="User ID" required="required"
//             onChange={handleChange}/>
//         </div>
// 		<div class="form-group">
//             <input type="password" class="form-control" name="password" placeholder="Password" 
//             required="required" onChange={handleChange}/>
//         </div>
// 		<div class="form-group">
//             <button type="submit" class="btn btn-primary btn-lg">Log In</button>
//         </div>
//     </form>
// 	 <div class="hint-text">Dont have an account? <a href="#">Signup Now</a></div> 
// </div>
      
//   );
// }

    
//  export default Login;
