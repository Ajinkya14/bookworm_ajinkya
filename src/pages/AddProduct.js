import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
export function AddProduct() 
{
  const [product,setProduct]=useState({});
  let navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct(values => ({ ...values, [name]: value }))
    console.log(product);
}
  const handleSubmit = event => 
  {
    
      const url = 'http://localhost:8080/crud/addProduct'
      const requestOptions = 
      {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
      };
      fetch(url, requestOptions)
          .then(response => {console.log('Submitted successfully');
        alert("Product added Successfully")})
          .catch(error => console.log('Form submit error: ', error))
          navigate("/Library")
          console.log(product);
          alert("on submit signup 2");
          // event.preventDefault();
    };
  

  

return(
<form className="form-horizontal" onSubmit={handleSubmit} >
<legend>PRODUCTS</legend>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_name" name="productName" placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_name_fr">PRODUCT ENGLISH NAME</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_english_name" name="productEnglishName" placeholder="PRODUCT ENGLISH NAME" class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_categorie">PRODUCT TYPE</label>
  <div class="col-md-4">
    <select  onChange={handleChange} id="product_type" name="productType" class="form-control">
        <option id='1' value={1}>E-Book</option>
        <option id='2' value={2}>Audio-Book</option>
    </select>
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="available_quantity">PRODUCT BASE PRICE</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_baseprice" name="productBaseprice" placeholder="PRODUCT BASE PRICE" class="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_weight">PRODUCT SELLING PRICE</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_sp_price" name="productSpCost" placeholder="PRODUCT SP" class="form-control input-md" required="" type="text"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_weight">PRODUCT OFFER PRICE</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_offerprice" name="productOfferprice" placeholder="PRODUCT Offer Price" class="form-control input-md" required="" type="text"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_offerprice_expiry">PRODUCT OFFER EXPIRY</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_offerprice_expiry" name="productOfferpriceExpirydate"  class="form-control input-md" required="" type="date"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_desc_short">PRODUCT DESCRIPTION SHORT</label>
  <div class="col-md-4">                     
    <textarea  onChange={handleChange} class="form-control" id="product_desc_short" name="productDescShort"></textarea>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_desc_long">PRODUCT DESCRIPTION LONG</label>
  <div class="col-md-4">                     
    <textarea  onChange={handleChange} class="form-control" id="product_desc_long" name="productDescLong"></textarea>
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_isbn">PRODUCT ISBN</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="product_isbn" name="productIsbn" placeholder="PRODUCT ISBN" class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_author_id">PRODUCT AUTHOR ID</label>  
  <div class="col-md-4">
  <input  onChange={handleChange} id="stock_alert" name="productAuthorId" placeholder="product_author_id" class="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_language">PRODUCT LANGUAGE</label>
  <div class="col-md-4">
    <select  onChange={handleChange} id="product_language" name="productLanguage" class="form-control">
        <option id='1' value={1}>MARATHI</option>
        <option id='2' value={5}>HINDI</option>
        <option id='3' value={3}>ENGLISH</option>
    </select>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_genre">PRODUCT GENRE</label>
  <div class="col-md-4">
  <select  onChange={handleChange} id="product_genre" name="productGenere" class="form-control">
        <option id='1' value={6}>COMIC</option>
        <option id='2' value={4}>BIOPIC</option>
        <option id='3' value={5}>HORROR</option>
    </select>
  </div>
</div>

 <div class="form-group">
  <label class="col-md-4 control-label" htmlFor="stock_critical">IS RENTABLE?</label>
  <div class="col-md-4">
    {/* <input onChange={handleChange} id="is_rentable" name="isRentable" value={true} type="radio" className="form-control input-md"> YES</input>
    <input onChange={handleChange} id="is_rentable" name="isRentable" value={false} type="radio" className="form-control input-md"> NO</input>
 */} 
  
  <Form.Check type="checkbox" aria-label="radio 1" />
 
  </div>
</div> 

{/* <div class="form-group">
  <label class="col-md-4 control-label" for="stock_critical">IS LIBRARY?</label>
  <div class="col-md-4">
    <input id="is_library" name="is_library" type="radio"class="form-control input-md" required=""> YES</input>
    <input id="is_library" name="is_library" type="radio" class="form-control input-md" required=""> NO</input>
  </div>
</div> */}


<div class="form-group">
  <label class="col-md-4 control-label" for="product_image">PRODUCT IMAGE</label>
  <div class="col-md-4">
    <input  onChange={handleChange} id="product_image" name="productImage" class="input-file" type="file"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_file">PRODUCT FILE</label>
  <div class="col-md-4">
    <input  onChange={handleChange} id="product_file" name="product_file" class="input-file" type="file"/>
  </div>
</div>


<div class="form-group">
<label class="col-md-4 control-label" for="product_file">SUBMIT NOW</label>
  <div class="col-md-4">
    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Button</button>
  </div>
  </div>
</form>


)
}
export default AddProduct;