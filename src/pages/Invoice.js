import React from 'react';
import { useState, useEffect } from "react";
import { string } from 'yup';
import { Table ,Button, Container,ToastBody, Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigationbar from './Navigationbar';
export function Invoice(props) 
{
    const uid=sessionStorage.getItem("UserId");
    const [product, setProduct] = useState([]);
    const [invoiceObj, setInvoiceObj] = useState({});
    const [count, setCount] = useState(0);
    const [disc, setDisc] = useState(0);
    const [total, setTotal] = useState(0); 
    const [tot,setTot]=useState(0); 
    const [invId,setInvId]=useState(0); 
    const [invDt,setInvDt]=useState(0);
   
    
    const [cartItems,setCartItems]=useState([]);

   /*  const compDate=(expDate)=>
    {
        let d1=new Date(expDate);
        let d2=Date.now();
        if(d1-d2>=0)
        return true;
        else
        return false;
    }
    const calDisc=(expDate,sp,ofp)=>
    {
        let d1=new Date(expDate);
        let d2=Date.now();
        if(d1-d2>=0)
        {
            let s=((sp-ofp)/sp*100).toString();
            return s.substring(0,4)
         
        }
        else
        return "0";
    } */
    useEffect(() => 
    {
        fetch("http://localhost:8080/crud/productsfromInvoiceDetails/"+uid)
        .then(res => res.json())
        .then((result) => 
        {   setProduct(result);
            console.log("in useEffect")
            console.log(product); 
            setTot(result[0][2].invoiceAmt);
            setInvId(result[0][2].invoiceId);
            setInvDt(result[0][2].invoiceDt);

        });

           
       /*  fetch("http://localhost:8080/crud/getTotalAmt/"+uid)
        .then(res => res.json())
        .then((result) => { setTotal(result);
        console.log(total) }); */
            
        console.log("in use effect")
        
    },[]) 


    return (
        <><Navigationbar/>
        <div>
            <br />
            <h2>Invoice</h2><br />

            <table align="right">
                <tbody>
                <tr align="left"><td><b>Invoice Id </b></td><td>:{invId}</td></tr>
                <tr align="left"><td><b>Invoice Date </b></td><td>:{invDt}</td></tr>
                <tr align="left"><td></td><td></td></tr>
                </tbody>
            </table><br/><br/><br/>

           
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Product ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Net Payable</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(prod => (

                        <tr key={prod[1].productId}>
                            
                            <td>{prod[1].productId}</td>
                            <td>{prod[1].productName}</td>
                            <td>{prod[1].productSpCost}</td>
                            <td>{prod[0].discount}%</td>
                            <td>{prod[0].netPay}</td>
                            {/* <td>{calDisc(prod[1].productOfferpriceExpirydate,prod[1].productSpCost,prod[1].productOfferprice)}%</td> */}
                           
                            {/* <td>{compDate(prod[1].productOfferpriceExpirydate)?prod[1].productOfferprice:prod[1].productSpCost}</td> */}
                           

                        </tr>
                    ))}

                </tbody>
                <thead>
                    <tr>
                        <td>Total</td>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>&#8377;&nbsp;{tot}</th>
                    </tr>
                   
                   
                </thead>
            </Table>

            <Container style={{padding:"100px"}}>
                <Row>
                    <Col>
                    <Link to="/Shelf"> <Button variant="primary" style={{align:'center',fontSize:"17px"}}>Go to My Shelf {'>'}</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}

export default Invoice;