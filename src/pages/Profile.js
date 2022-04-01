import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import userEvent from '@testing-library/user-event';
import Navigationbar from './Navigationbar';

export function Profile(props) 
{

    const [User, setUser] = useState({});
    const [Beneficiary, setBeneficiary] = useState({});
    const roleId  =sessionStorage.getItem("RoleId");
    const Id  =sessionStorage.getItem("UserId");


    useEffect(() => 
    {
        if(roleId==1)
        {
        fetch("http://localhost:8080/crud/searchuser/" + Id)
            .then(res => res.json())
            .then((result) => { setUser(result); }
            );
        }
        else{
            fetch("http://localhost:8080/crud/bensearch/" + Id)
            .then(res => res.json())
            .then((result) => { setBeneficiary(result); }
            );
        }
        console.log(roleId)
    }, []);

    



    if(roleId==1)
    {
    return(
        <>
        <Navigationbar/>
        <div className="w3-content w3-margin-top">
        
         
          <div className="w3-row-padding">
          
            <div className="w3-threethird">
            
            <div className="w3-white w3-text-grey w3-card-4">
              
              <div className="w3-container">
              <div className="w3-display-container">
                  <h2>{User.first_name} {User.last_name}</h2>
              </div>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal">Email ID: </i>{User.email_id}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal">Mobile: </i>{User.mobile_no}</p>
               
                <a href="/"> Edit Profile Details</a>
                <hr/>
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Login Details</b></p>
                <p>User Name:<b> {User.user_name}</b></p>
                <p>Password:<b type='password'> {User.password}</b></p>  
                <a href="/"> Change Password</a>
                <hr/>
                <br/>
              </div>
            </div>
          </div>
        </div>
        </div></>
    )}
    if(roleId==2)
    {
        return(
        <>
        <Navigationbar/>
        <div className="w3-content w3-margin-top">
         
          <div className="w3-row-padding">
          
            <div className="w3-threethird">
            
            <div className="w3-white w3-text-grey w3-card-4">
              
              <div className="w3-container">
              <div className="w3-display-container">
                  <h2>{Beneficiary.benName} </h2>
              </div>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal">Email ID: </i>{Beneficiary.benEmailId}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal">Mobile: </i>{Beneficiary.benContactNo}</p>
               
                <a href="/"> Edit Profile Details</a>
                <hr/>
        
               
        
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Login Details</b></p>
                <p>User Name:<b> {Beneficiary.benUserName}</b></p>
                <p>Password:<b type='password'> {Beneficiary.benPassword}</b></p>  
                <a href="/"> Change Password</a>
                <hr/>
        
                
             
                <div>
        
            
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Bank Details</b></p>
                <p>Bank Name:<b> {Beneficiary.benBankName}</b></p>
                <p>Bank Branch:<b type='password'> {Beneficiary.benBankBranch}</b></p>
                <p>Bank IFSC:<b> {Beneficiary.benIfsc}</b></p>
                <p>Bank AccNo:<b type='password'> {Beneficiary.benAccNo}</b></p>
                <p>Bank AccType:<b type='password'> {Beneficiary.benAccType}</b></p>    
                <br/>
                <hr/>
        
                </div> </div> </div> </div> </div>
            </div>
        </>)
    }
   
}


export default Profile;