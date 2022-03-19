import {Form,Button,Row,Col,InputGroup, Container} from "react-bootstrap";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik } from "formik";
import * as yup from 'yup';
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import './Signup.css';


                
function Login(){
  const [user, setUser] = useState({role_id:1});
  const [usertype,SetUserType]= useState(true);

  let navigate = useNavigate();
 
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setUser(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = event => {
      
  alert("on submit");
      const url = 'https://localhost:44385/api/User_Details/'
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
      };
      fetch(url, requestOptions)
          .then(response => {console.log('Submitted successfully');alert(response);})
          .catch(error => console.log('Form submit error: ', error))
          navigate("/")
          console.log(user);
          // event.preventDefault();
    };

  return (
    <div class="signup-form">
        
    <form onSubmit={handleSubmit}>
    
		<h2>Log In</h2>
		<p>Please login here!</p>
        
        <div class="form-group">
        	<input type="text" class="form-control" name="user_id" placeholder="User ID" required="required"
            onChange={handleChange}/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" 
            required="required" onChange={handleChange}/>
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Log In</button>
        </div>
    </form>
	 <div class="hint-text">Dont have an account? <a href="#">Signup Now</a></div> 
</div>
      
  );
}

    
 export default Login;
