import React from 'react';
import { useState, useEffect } from "react";
import { Table, Container } from 'react-bootstrap';
export function Invoice(props) 
{
    const [product, setProduct] = useState([]);
    const [invoiceObj, setInvoiceObj] = useState({});
    const [count, setCount] = useState(0);
    const [disc, setDisc] = useState(0);
    const [total, setTotal] = useState(0);

    
    useEffect(() => 
    {
        //alert("Payment Successful!!")
        setProduct(props.prod)
        console.log("in use effect")
        /*  console.log("inside effect")
         //fetch("https://localhost:44366/api/customers")//.net
         fetch("http://localhost:8081/getCustomers")//nodejs
         .then((rs)=>rs.json())
         .then((result)=>{setCustomer(result)})
         
         console.log(customer) */
        //setCount(1);
        setCount(0)
        product.map((prod) => {
            //console.log(count)
            setCount((c) => c + prod.price)
            setDisc(count*0.05)
            let x=count-disc;
            console.log(x)
            setTotal(x)
        })
      
       

    })


    return (
        <div>
            <br />
            <h2>Invoice</h2><br />
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Product ID</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(prod => (

                        <tr key={prod.id}>
                            <td></td>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.type}</td>
                            <td>{prod.price}</td>

                        </tr>
                    ))}

                </tbody>
                <thead>
                    <tr>
                        <td>Total</td>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{count}</th>
                    </tr>
                    <tr>
                        <td>Less Discount 5%</td>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td>{disc}</td>
                    </tr>
                    <tr>
                        <th>Net Pay</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td>{total}</td>
                    </tr>
                </thead>
            </Table>
        </div>

    )

}

export default Invoice;