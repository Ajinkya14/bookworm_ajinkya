import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import '../PubPro.css';
import Navigationbar from './Navigationbar';

export function AddProduct2(){
let userid=sessionStorage.getItem("UserId")
  const [product, setProduct] = useState({productPublisher:userid});
  //const [usertype,SetUserType]= useState(true);

  let navigate = useNavigate();
 
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setProduct(values => ({ ...values, [name]: value }))
      console.log(product)
  }

  const handleSubmit = event => 
  {
      
  alert("on submit signup "+ product.product_name );
  
      const url = 'http://localhost:8080/crud/addProduct'
      const requestOptions = 
      {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
      };
      console.log(product);
      alert("To see");
      fetch(url, requestOptions)
          .then(response => console.log('Submitted successfully'))
          .catch(error => console.log('Form submit error: ', error))
          navigate("/AddProduct")
          console.log(product);
         
          alert(product.product_file)
           
    };

return(<><Navigationbar/>
  <div className="og-contianer">
    
<form className="form-horizontal" onSubmit={handleSubmit}>
<legend>PRODUCTS</legend>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT NAME</label>  
  <div className="col-md-4">
  <input id="product_name" onChange={handleChange} name="productName" placeholder="PRODUCT NAME" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT ENGLISH NAME</label>  
  <div className="col-md-4">
  <input id="english" onChange={handleChange} name="productEnglishName" placeholder="PRODUCT ENGLISH NAME" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT TYPE</label>
  <div className="col-md-4">
    <select id="productType"  onChange={handleChange} name="productType" className="form-control">
    <option id='1' value={1}>E-Book</option>
        <option id='2' value={2}>Audio-Book</option>
    </select>
  </div>
</div>


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT BASE PRICE</label>  
  <div className="col-md-4">
  <input id="gyg"  onChange={handleChange} name="productBaseprice" placeholder="PRODUCT BASE PRICE" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT SELLING PRICE</label>  
  <div className="col-md-4">
  <input id="oioi"  onChange={handleChange} name="productSpCost" placeholder="PRODUCT SP" className="form-control input-md" required="" type="text"/>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label">PRODUCT OFFER PRICE</label>  
  <div className="col-md-4">
  <input id="product_offerprice"  onChange={handleChange} name="productOfferprice" placeholder="PRODUCT Offer Price" className="form-control input-md" required="" type="text"/>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT OFFER EXPIRY</label>  
  <div className="col-md-4">
  <input id="product_offerprice_expiry"  onChange={handleChange} name="productOfferpriceExpirydate"  className="form-control input-md" required="" type="date"/>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label">PRODUCT DESCRIPTION SHORT</label>
  <div className="col-md-4">                     
    <textarea className="form-control"  onChange={handleChange} id="productDescShort" name="productDescShort"></textarea>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT DESCRIPTION LONG</label>
  <div className="col-md-4">                     
    <textarea className="form-control"  onChange={handleChange} id="productDescLong" name="productDescLong"></textarea>
  </div>
</div>


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT ISBN</label>  
  <div className="col-md-4">
  <input id="product_isbn"  onChange={handleChange} name="productIsbn" placeholder="PRODUCT ISBN" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT AUTHOR ID</label>  
  <div className="col-md-4">
  <input id="stock_alert"  onChange={handleChange} name="productAuthorId" placeholder="product_author_id" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT LANGUAGE</label>
  <div className="col-md-4">
    <select id="product_language"  onChange={handleChange} name="productLanguage" className="form-control">
      
    <option id='1' value={1}>MARATHI</option>
        <option id='2' value={5}>HINDI</option>
        <option id='3' value={3}>ENGLISH</option>
    </select>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT GENRE</label>
  <div className="col-md-4">
  <select id="product_genre" onChange={handleChange} name="productGenere" className="form-control">
  <option id='1' value={6}>COMIC</option>
        <option id='2' value={4}>BIOPIC</option>
        <option id='3' value={5}>HORROR</option>
    </select>
  </div>
</div>




{/* <input type="radio" name="yes_no" checked>Yes</input>
<input type="radio" name="yes_no">No</input> */}
{/* <div className="form-group">
  <label className="col-md-4 control-label" for="stock_critical">IS RENTABLE?</label>
  <div className="col-md-4">
    <input id="is_rentable" name="is_rentable" type="radio"className="form-control input-md" required=""> YES</input>
    <input id="is_rentable" name="is_rentable" type="radio" className="form-control input-md" required=""> NO</input>
  </div>
</div> */}

{/* <div className="form-group">
  <label className="col-md-4 control-label" for="stock_critical">IS LIBRARY?</label>
  <div className="col-md-4">
    <input id="is_library" name="is_library" type="radio"className="form-control input-md" required=""> YES</input>
    <input id="is_library" name="is_library" type="radio" className="form-control input-md" required=""> NO</input>
  </div>
</div> */}


<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT IMAGE</label>
  <div className="col-md-4">
    <input id="product_image" onChange={handleChange} name="productImage" className="input-file" type="file"/>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT FILE</label>
  <div className="col-md-4">
    <input id="product_file" onChange={handleChange} name="productFile" className="input-file" type="file"/>
  </div>
</div>

<div className="form-group">
<label className="col-md-4 control-label" >SUBMIT NOW</label>
  <div className="col-md-4">
    <button id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
  </div>
  </div>
</form>
</div>
</>
)
}
export default AddProduct2;