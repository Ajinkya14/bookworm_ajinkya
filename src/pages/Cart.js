import React from 'react';
import { useState, useEffect } from "react";
import { Table ,Button, Container, Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Cart(){
    const uid=1;
    const [delcount,setDelcount]=useState(0);
    const [cartItems,setCartItems]=useState([]);
    const [total,setTotal]=useState("");
    useEffect(()=>{
        fetch("http://localhost:8080/crud/productsfromcart/"+uid)
        .then(res => res.json())
        .then((result) => { setCartItems(result);
        console.log(cartItems) ;});
        fetch("http://localhost:8080/crud/totalfromcart/"+uid)
        .then(res=>res.json())
        .then((result)=>{setTotal(result);
        console.log(total);
    })
           
    },[delcount]
    )

    const removeHandler=(cid)=>{
        const url="http://localhost:8080/crud/removeFromCart/"+cid;
        fetch(url,{method:"Delete"})
        .then(response => setDelcount(delcount+1))
        .catch(error => console.log('Form submit error: ', error))
    }
    return(
        <div style={{paddingTop:'20px'}}>
            <Table>
            <thead>
                <tr>
                    <th>
                    <div>Product</div>
                    </th>
                    <th>
                    <div>Base Price</div>
                    </th>
                    <th>
                    <div>Special Price</div>
                    </th>
                    <th>
                    <div>Offer Price</div>
                    </th>
                    <th>
                    <div>Remove</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(book=>
                            ( 
                                <tr key={book[1].productId}>
                                    <td>{book[1].productName}</td>
                                    <td>{book[1].productBaseprice}</td>
                                    <td>{book[1].productSpCost}</td>
                                    <td>{book[1].productOfferprice}</td>
                                    <td><Button variant="danger" onClick={()=>{removeHandler(book[0].cartId)}}>Remove</Button></td>
                                </tr>
                            )

                        )
                    }
                </tbody>
            </Table>
            <Container style={{padding:"100px"}}>
                <Row>
                    <Col>
                    <h2>Total : ₹ {total}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to="/Payment"> <Button variant="primary" style={{align:'center',fontSize:"17px"}}>Proceed To Payment Page {'>'}</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
// export default function Cart(props) {
//     const [cartData, setCartData] = useState([]);
//     useEffect(() => {
//         fetch('./cart.json').then(res => res.json())
//             .then((result) => { 
//                 setCartData(result)
//              }
//             );
//             console.log('fetching')
//             console.log(cartData)
         
      
//     },[]);

//     const submitHandler=()=>{
//         props.func(cartData);
//         Navigate('/Payment');
    
//     }
//     return(
//         <div>
//         <h1>Shopping Cart</h1>
//         <div class="container  " >
//             {cartData.map(elem=>(
//                 <div class="row my-4">
//             <hr/>
//         <div class=" col-md-4">
            
//             <div  >
//                 <img src={`../images/${elem.img}`}  class="img-thumbnail" alt="..." />
//             </div>
                
                  
                

//       </div>
//       <div class="col-md-4">
//         <p>
//             <b>{elem.product_name}</b><br/><i> {elem.first_name+" "+elem.last_name}</i>
//        </p>
    
//           <strong>{elem.type_desc}</strong>
//           {/* <p><span style="background-color: chartreuse;" class="badge rounded-pill ">BestSeller</span></p> */}
    
//         </div>
//         <div class="col-md-2" >
//             <strong class="mt-5 py-auto mx-auto" >{elem.product_baseprice} Rs</strong>
            
//              </div>
        
//         <div class="col-md-2">
  
//           <a href="#removebook" class="btn btn-danger link mt-5">Remove</a>
//         </div>
//         </div>
//         ))}
//         </div>

//         <div className='container mx-auto'>
//         <button type="submit" class="btn btn-primary " onClick={()=>submitHandler()}>Submit</button>
      
//         </div>
//         </div>
//     );


// }