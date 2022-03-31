import React from 'react';
import { Col, Container, Row, Button, Card ,Alert } from "react-bootstrap";
 
export default function Book({d}) {
  
  return (
    
    <Container fluid>
            {/* <Row>
                <img src={Bookcases} alt="displayimg"></img>
            </Row> */}
            <Row>
                {d.map(book => (

                    <Col xs={2} style={{padding:"5px"}}>
                        <Card >
                        {/* <Card.Img variant="top" src={book.productImage+"/190px280"} /> */}
                            <img src={book[1].productImage} height="280px" width="190px"></img>
                            {/* keep image size horizontal 190 px */}
                            <Card.Body>
                            <Card.Title>{book[1].productName}</Card.Title>
                                <Card.Text>
                                    <h6 style={{textAlign:"center"}}>{book[1].productDescShort}</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </Container>
    // d.map(book=>(
    //            <div className="w3-col l3 s6 m4 mx-auto" >
    //                 <div className="w3-container mx-5 " >
                   
                
    //                     <img src={book[1].productImage}  className="img-thumbnail" ></img>
    //                     <p><b>{book[1].productName}</b><br/><i> {book[1].productDescShort}</i><br/>Expiring in 3 days</p>
    //                 </div>
    //             </div> 
    //   )
    //           )
 

  )
}
