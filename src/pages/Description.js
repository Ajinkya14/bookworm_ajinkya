import React from 'react';
import '../pages/description.css';
import Datetime from 'react-datetime';
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom"


export function Description(props) {
    const [Product, setProduct] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8080/crud/search/" + id)
            .then(res => res.json())
            .then((result) => { setProduct(result); 
            }
            );
    }, []);

    const submitHandler=(id)=>{
        const cart={'productId':id,'userId':1}
        const url="http://localhost:8080/crud/addtocart"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        };
        fetch(url,requestOptions)
        .then(response => alert('Added to cart successfully'))
        .catch(error => console.log('Form submit error: ', error))
        // Navigate('/');
    
    }
  return (

    <div className="container">
    <div className="card">


    

                <div className="card-body">

       
       

            <h2 className="card-title">{Product.productName}</h2>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src={Product.productImage} className="img-responsive"/></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Product description</h4>
                    <p>{Product.productDescLong}</p>
                    <h2 className="mt-5">
                    ₹ :{Product.productBaseprice}<small className="text-success">(36%off)</small>
                    </h2>
                     {/* <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                        <i className="fa fa-shopping-cart"></i>
                    </button>  */}
                    <button className="btn btn-primary btn-rounded" onClick={()=>{submitHandler(Product.productId)}}>Add to Cart </button>
                    
                    <button className="btn btn-primary btn-rounded">Buy Now</button>
                    <h3 className="box-title mt-5">Key Highlights</h3>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check text-success"></i>Free Reading</li>
                        <li><i className="fa fa-check text-success"></i>Focus On Main Points</li>
                        <li><i className="fa fa-check text-success"></i>Get Discounts</li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Book English Name :</td>
                                    <td>{Product.productEnglishName}</td>
                                </tr>
                                <tr>
                                    <td>Selling Price :</td>
                                    <td>{Product.productSpCost}</td>
                                </tr>
                                <tr>
                                    <td>Offer Price :</td>
                                    <td>{Product.productOfferprice}</td>
                                </tr>
                                <tr>
                                    <td>Offer Price Expiry Date :</td>
                                    <td>{Product.productOfferpriceExpirydate}</td>
                                </tr>
                                <tr>
                                    <td>Product Description Short :</td>
                                    <td>{Product.productDescShort}</td>
                                </tr>
                                <tr>
                                    <td>Product ISBN :</td>
                                    <td>{Product.productIsbn}</td>
                                </tr>
                                <tr>
                                    <td>Product Author ID :</td>
                                    <td>{Product.productAuthorId}</td>
                                </tr>
                                <tr>
                                    <td>Product Publisher</td>
                                    <td>{Product.productPublisher}</td>
                                </tr>
                                <tr>
                                    <td>Product Language</td>
                                    <td>{Product.productLanguage}</td>
                                </tr>
                                <tr>
                                    <td>Is Rental ?</td>
                                    <td>{Product.isRentable}</td>
                                </tr>
                                <tr>
                                    <td>Is Library ?</td>
                                    <td>{Product.isLibrary}</td>
                                </tr>


                                
                               {/*  <tr>
                                    <td>Model Number</td>
                                    <td>F01020701-00HT744A06</td>
                                </tr>
                                <tr>
                                    <td>Armrest Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
                                </tr> */}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>

    </div>
        
</div>
</div>

            

  );
}; 


export default Description;