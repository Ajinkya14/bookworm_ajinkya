import {Form,Button,Row,Col,InputGroup, Container} from "react-bootstrap";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik } from "formik";
import * as yup from 'yup';
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import './Signup.css'

                    
function Signup(){
  const [user, setUser] = useState({role_id:1});
  const [usertype,SetUserType]= useState(true);

  let navigate = useNavigate();
 
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setUser(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = event => 
  {
    console.log(user.Ben_email_id +" ")
  alert("on submit signup "+ user.role_id);
   if(user.role_id=1)
       var url = 'http://localhost:8080/crud/addUser'
      if(user.role_id=2)
       url = 'http://localhost:8080/crud/benadd'
      const requestOptions = 
      {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
      };
      console.log(user.Ben_email_id +" Before ")
      fetch(url, requestOptions)
          .then(response => console.log('Submitted successfully'))
          .catch(error => console.log('Form submit error: ', error))
          navigate("/")
          console.log(user);
          
          console.log(user.Ben_email_id +" ")
          alert("on submit signup 2");
          // event.preventDefault();
    };
    

   const onButton= (event) => {
       alert(event.target.value)
      if (event.target.value == "user")
      {
        SetUserType(true);
        setUser({role_id: 1})
        
      }
       else 
       {
       SetUserType(false);
       setUser({role_id: 2})
       alert(usertype);
       }
        };
        

  return (
    <div class="signup-form">     
    <form onSubmit={handleSubmit}>
        
    <div class="btn-group" >
  <button id="bt1"  value="user" onClick={onButton} class="button">User</button>
  <button id="bt2" value="publisher" onClick={onButton} class="button">Publisher</button>
    </div>
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
    <ChangeButton isClicked={usertype} handleChange2={handleChange}/>
        
       

        
              
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" name="role_id" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn-grad">Sign Up</button>
        </div>
    </form>
	<div class="hint-text">Already have an account? <a href="/Login">Login here</a></div>
    

</div>

    
  );
}
const ChangeButton = (props) => {
     let { isClicked,handleChange2} = props;
     if (isClicked) 
     {
    return <>
<div class="form-group">
    <div class="row">
    <div  class="col">
        <input type="text" onChange={handleChange2} class="form-control" name="first_name" 
        placeholder="First Name" required="required" /></div>
        
    <div class="col">
        <input type="text" onChange={handleChange2} class="form-control " name="last_name" 
        placeholder="Last Name" required="required" /></div>
</div>
</div>

<div class="form-group">
<input type="email" class="form-control" name="email_id" placeholder="Email" required="required"
  onChange={handleChange2}/>
</div>
<div class="form-group">
<input type="text" class="form-control" name="user_name" placeholder="User ID" required="required"
  onChange={handleChange2}/>
</div>
<div class="form-group">
  <input type="password" class="form-control" name="password" placeholder="Password" 
  required="required" onChange={handleChange2}/>
</div>
<div class="form-group">
  <input type="mobile" class="form-control" name="mobile_no" 
  placeholder="8888888888" required="required" onChange={handleChange2}/>
</div>  
   
</>
;
     } 

   else {
    return <>
    
    <div class="form-group">
        <input type="text" onChange={handleChange2} class="form-control" name="benName" 
        placeholder="Publication Name" required="required" /></div>
        
        <div class="form-group">
<input type="text" class="form-control" name="benEmailId" placeholder="Email" required="required"
  onChange={handleChange2}/>
</div>
<div class="form-group">
  <input type="mobile" class="form-control" name="benContactNo" 
  placeholder="Mobile Number" required="required" onChange={handleChange2}/>
</div>  
<div class="form-group">
  <div class="row">
  <div class="col">
<input type="text" class="form-control" name="benUserName" placeholder="User ID" required="required"
  onChange={handleChange2}/>
</div>
<div class="col">
  <input type="password" class="form-control" name="benPassword" placeholder="Password" 
  required="required" onChange={handleChange2}/>
  </div>
</div>
</div>
<div class="form-group">
<div class="row">
    <div  class="col">
  <input type="text" class="form-control" name="benBankName" placeholder="Bank Name" 
  required="required" onChange={handleChange2}/>
</div>
<div  class="col">
  <input type="text" class="form-control" name="benBankBranch" placeholder="Bank Branch" 
  required="required" onChange={handleChange2}/>
</div>
</div>
</div>
<div class="form-group">
<div class="row">
    <div  class="col">
  <input type="text" class="form-control" name="benIfsc" placeholder="IFSC Code" 
  required="required" onChange={handleChange2}/>
  </div>
<div class="col">
  <input type="text" class="form-control" name="benAccType" placeholder="Account Type" 
  required="required" onChange={handleChange2}/>
</div>
</div>
</div>
<div class="form-group">
  <input type="text" class="form-control" name="benAccNo" placeholder="Account Number" 
  required="required" onChange={handleChange2}/>
</div>

<div class="form-group">
  <input type="text" class="form-control" name="benPan" placeholder="PAN Number" 
  required="required" onChange={handleChange2}/>
</div>


        </>
           ;
 }
    };
    
 export default Signup;
