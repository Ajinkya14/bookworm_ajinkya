import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigationbar from './Navigationbar';
function Edit() {

    const [product, setProd] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate(); 
    useEffect(() => {
        fetch("http://localhost:8080/crud/search/" + Id)
            .then(res => res.json())
            .then((result) => { setProd(result);  }
            );
    }, []);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProd(values => ({ ...values, [name]: value }))
    }


     const handleSubmit = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        // fetch("http://localhost:8080/crud/productupdate", {
        //     method: 'PUT',
        //     headers: { 'Content-type': 'application/json' },
        //     body: demo
        // }).then(res => res.json());
       
        //   navigate('/PublisherProduct'); 
        const requestOptions = 
      {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: demo
      };
      
      fetch("http://localhost:8080/crud/update/"+Id, requestOptions)
          .then(response => console.log('Submitted successfully'))
          .catch(error => console.log('Form submit error: ', error))
          navigate("/PublisherProduct/"+Id)

        
        event.preventDefault(); 
        // alert(employee);
    }
 

    

          
    return (
      <><Navigationbar/>
        <form class="form-horizontal" onSubmit={handleSubmit}>
<legend>PRODUCTS</legend>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>  
  <div class="col-md-4">
  <input id="product_name" name="productName" value={product.productName || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_name_fr">PRODUCT ENGLISH NAME</label>  
  <div class="col-md-4">
  <input id="product_english_name" name="productEnglishName" value={product.productEnglishName || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_categorie">PRODUCT TYPE</label>
  <div class="col-md-4">
    <select id="product_type" name="productType" class="form-control">
        <option>E-Book</option>
        <option>Audio-Book</option>
    </select>
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="available_quantity">PRODUCT BASE PRICE</label>  
  <div class="col-md-4">
  <input id="productBaseprice" name="product_baseprice" value={product.productBaseprice || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_weight">PRODUCT SELLING PRICE</label>  
  <div class="col-md-4">
  <input id="product_sp_price" name="productSpCost" value={product.productSpCost || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_weight">PRODUCT OFFER PRICE</label>  
  <div class="col-md-4">
  <input id="product_offerprice" name="productOfferprice" value={product.productOfferprice || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_offerprice_expiry">PRODUCT OFFER EXPIRY</label>  
  <div class="col-md-4">
  <input id="product_offerprice_expiry" name="productOfferpriceExpirydate" value={product.productOfferpriceExpirydate || ""} onChange={handleChange} class="form-control input-md" required="" type="date" />
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_desc_short">PRODUCT DESCRIPTION SHORT</label>
  <div class="col-md-4">                     
    <textarea class="form-control" name="productDescShort" id="product_desc_short" value={product.productDescShort || ""} onChange={handleChange} ></textarea>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_desc_long">PRODUCT DESCRIPTION LONG</label>
  <div class="col-md-4">                     
    <textarea class="form-control" name="productDescLong" id="product_desc_long" value={product.productDescLong || ""} onChange={handleChange} ></textarea>
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_isbn">PRODUCT ISBN</label>  
  <div class="col-md-4">
  <input id="product_isbn" name="productIsbn" value={product.productIsbn || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
    
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="product_author_id">PRODUCT AUTHOR ID</label>  
  <div class="col-md-4">
  <input id="stock_alert" name="productAuthorId" value={product.productAuthorId || ""} onChange={handleChange} class="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_language">PRODUCT LANGUAGE</label>
  <div class="col-md-4">
    <select id="productLanguage" name="product_language" class="form-control">
        <option id='1'>MARATHI</option>
        <option id='2'>HINDI</option>
        <option id='3'>ENGLISH</option>
    </select>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_genre">PRODUCT GENRE</label>
  <div class="col-md-4">
  <select id="productGenere" name="product_genre" class="form-control">
        <option id='1'>COMIC</option>
        <option id='2'>BIOPIC</option>
        <option id='3'>HORROR</option>
    </select>
  </div>
</div>

{/* <div class="form-group">
  <label class="col-md-4 control-label" for="stock_critical">IS RENTABLE?</label>
  <div class="col-md-4">
    <input id="is_rentable" name="is_rentable" type="radio"class="form-control input-md" required=""> YES</input>
    <input id="is_rentable" name="is_rentable" type="radio" class="form-control input-md" required=""> NO</input>
  </div>
</div> */}

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
    <input id="productImage" name="product_image" class="input-file" type="file"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_file">PRODUCT FILE</label>
  <div class="col-md-4">
    <input id="product_file" name="productFile" class="input-file" type="file"/>
  </div>
</div>


<div class="form-group">
<label class="col-md-4 control-label" for="product_file">SUBMIT NOW</label>
  <div class="col-md-4">
    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Button</button>
  </div>
  </div>
</form>
</>

)
    
}

export default Edit
