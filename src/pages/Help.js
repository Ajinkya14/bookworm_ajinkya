import React from 'react';
import Navigationbar from './Navigationbar';


function Help() 
{
    
       return (
        <><Navigationbar/>
  <section id="pricing" class="pricing">
    <br/><br/>
    <div class="container mx-auto" data-aos="fade-up">

      <header class="section-header">
        <h2>1. Lent a Book</h2>
        <br/><br/>
        <p align="center">Check Leasing Pricing: </p>
      </header>
      <h3 align="center">We have 3 Packages to subscribe Library for perticular days.<br/>Get a Package and
        read books for perticular days.</h3>
      <br/><br/>

      <div class="row gy-4" data-aos="fade-left">



        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200" id="starterplan">
          <div class="box">
            <span class="featured">Featured</span>
            <h3 style={{color: "#65c600"}}>Starter Plan</h3>
            <div class="price"><sup>₹</sup>100<span> / mo</span></div>
            <img src="pricing-starter.png" class="img-fluid" alt=""/>
            <ul>
              <li>Can lent upto 4 books per month</li>
              <li>Max 1 devices at a time</li>
            </ul>
            <a href="#" class="btn-buy">Subscribe Now</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
          <div class="box">
            <h3 style={{color: "#ff901c"}}>Pro Plan</h3>
            <div class="price"><sup>₹</sup>200<span> / mo</span></div>
            <img src="pricing-business.png" class="img-fluid" alt=""/>
            <ul>
              <li>Can lent upto 6 books per month</li>
              <li>Max 2 devices at a time</li>
            </ul>
            <a href="#" class="btn-buy">Subscribe Now</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
          <div class="box">
            <h3 style={{color: "#ff0071"}}>Ultimate Plan</h3>
            <div class="price"><sup>₹</sup>280<span> / mo</span></div>
            <img src="pricing-ultimate.png" class="img-fluid" alt=""/>
            <ul>
              <li>Can lent upto 8 books per month</li>
              <li>Max 3 devices at a time</li>
            </ul>
            <a href="#" class="btn-buy">Subscribe Now</a>
          </div>
        </div>

      </div>

    </div>

    <br/><br/><br/>
    <hr/><br/><br/>
    <div class="container mx-auto" data-aos="fade-up">

      <header class="section-header">
        <h2>2. Rent a Book</h2>
        <br/><br/>
        <p align="center">Check Rent Pricing/Day: </p>
      </header>
      <h3 align="center">We have made an option of renting a book,<br/>1. Select a book<br/>2. Choose number of days
        you want to rent for.</h3>
      <br/>
      <div align="center"><a href="#" class="btn-buy">Rent Now</a></div>

    </div>
    <br/><br/><br/>
    <hr/><br/><br/>

    <div class="container mx-auto" data-aos="fade-up">

      <header class="section-header">
        <h2>3. Buy a Book</h2>
        <br/><br/>
        <p align="center">Own a new book : </p>
      </header>
      <h3 align="center">Directly Buy a book,<br/>and own it forever.</h3>
      <br/>
      <div align="center"><a href="#" class="btn-buy">Buy Now</a></div>

    </div>

  </section>
  </>
       )
    
 }
 export default Help;