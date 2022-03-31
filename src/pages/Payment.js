import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import { Table ,Button, Container, Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Modal } from 'bootstrap';
export function Payment (props) 
{
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [invoice,setInvoice]=useState({})
  const [payStatus,setPayStatus]=useState(false)
  const navigate= useNavigate();

  const uid=sessionStorage.getItem("UserId");
  useEffect(() => 
  {
    fetch("http://localhost:8080/crud/totalfromcart/"+uid)
    .then(res => res.json())
    .then((result) => { setTotal(result);
    console.log(result) 
    setInvoice({
      invoiceDt:Date.now(),
      custId:uid,
      invoiceAmt:result})
    });


    document.getElementById("nav-tab-paypal").style.visibility='hidden';
    document.getElementById("nav-tab-bank").style.visibility='hidden';
    document.getElementById("nav-tab-card").style.visibility='hidden';
    //setProduct(props.prod)
    //setTotal(0)
    /* product.map((prod) => {
        console.log(total)
        //setTotal((c) => c + prod.price)
       
    }) */
    console.log(total)
    
  },[])

  const handleSubmit=()=>
  {
    
    console.log("in handle submit")
    const requestOptions = 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(invoice)
    };
    fetch("http://localhost:8080/crud/addInvoice", requestOptions)
        .then(response => {console.log('Invoice successfully');
        //alert("You have been registered Successfully")
        setPayStatus(true)
        })
      
      alert("Payment Successful");
    //navigate("/Invoice")
        
  }


  const handleClick=()=>{
    document.getElementById("nav-tab-paypal").style.visibility='visible';
    document.getElementById("nav-tab-bank").style.visibility='visible';
    document.getElementById("nav-tab-card").style.visibility='visible';
  }
      if(payStatus==true)
      {
        return (
            
            <div id='successDiv'><br/>
              <h3>Your payment is Successful</h3>
              <h4><a href="/Invoice">See The Invoice</a></h4>
              <Container style={{padding:"100px"}}>
                <Row>
                    <Col>
                    <Link to="/Shelf"> <Button variant="primary" style={{align:'center',fontSize:"17px"}}>Go to My Shelf {'>'}</Button></Link>
                    </Col>
                </Row>
            </Container>
            </div>
            )
      }
      else{
      return(
      <div className="maincontainer">
        <div class="container py-5">
          <h3>Total Amount Payable : {total}</h3>
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div class="bg-white rounded-lg shadow-sm p-5">

                <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill" onClick={handleClick}>
                      <i class="fa fa-credit-card"></i>
                      Credit Card
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link active rounded-pill">
                      <i class="fa fa-paypal"></i>
                      Paypal
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-bank" class="nav-link active rounded-pill">
                      <i class="fa fa-university"></i>
                      Bank Transfer
                    </a>
                  </li>
                </ul>

                <div class="tab-content">

                  <div id="nav-tab-card" class="tab-pane fade show active">
                    <p class="alert alert-success">Enter your Card details...</p>
                    <form role="form">
                      <div class="form-group">
                        <label for="username">Full name (on the card)</label>
                        <input type="text" name="username" placeholder="Jassa" required class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="cardNumber">Card number</label>
                        <div class="input-group">
                          <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
                          <div class="input-group-append">
                            <span class="input-group-text text-muted">
                              <i class="fa fa-cc-visa mx-1"></i>
                              <i class="fa fa-cc-amex mx-1"></i>
                              <i class="fa fa-cc-mastercard mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="form-group">
                            <label><span class="hidden-xs">Expiration</span></label>
                            <div class="input-group">
                              <input type="number" placeholder="MM" name="" class="form-control" required />
                              <input type="number" placeholder="YY" name="" class="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group mb-4">
                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                              <i class="fa fa-question-circle"></i>
                            </label>
                            <input type="text" required class="form-control" />
                          </div>
                        </div>
                      </div>
                      <button onClick={handleSubmit} type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
                  
                    </form>
                  </div>


                  <div id="nav-tab-paypal" class="tab-pane fade show active">
                  <p class="alert alert-success">Paypal is easiest way to pay online</p>
                  <form role="form">
                      <div class="form-group">
                        <label for="username">Full name (on the card)</label>
                        <input type="text" name="username" placeholder="Jassa" required class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="cardNumber">Card number</label>
                        <div class="input-group">
                          <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
                          <div class="input-group-append">
                            <span class="input-group-text text-muted">
                              <i class="fa fa-cc-visa mx-1"></i>
                              <i class="fa fa-cc-amex mx-1"></i>
                              <i class="fa fa-cc-mastercard mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="form-group">
                            <label><span class="hidden-xs">Expiration</span></label>
                            <div class="input-group">
                              <input type="number" placeholder="MM" name="" class="form-control" required />
                              <input type="number" placeholder="YY" name="" class="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group mb-4">
                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                              <i class="fa fa-question-circle"></i>
                            </label>
                            <input type="text" required class="form-control" />
                          </div>
                        </div>
                      </div><a href="/Invoice">
                      <button onClick={handleSubmit} type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
                    </a>
                    </form>
                  </div>

                  <div id="nav-tab-bank"  class="tab-pane fade show active">
                    <h6>Bank account details</h6>
                    <dl>
                      <dt>Bank</dt>
                      <dd> THE WORLD BANK</dd>
                    </dl>
                    <dl>
                      <dt>Account number</dt>
                      <dd>7775877975</dd>
                    </dl>
                    <dl>
                      <dt>IBAN</dt>
                      <dd>CZ7775877975656</dd>
                    </dl>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    )}
  ;
}
export default Payment;