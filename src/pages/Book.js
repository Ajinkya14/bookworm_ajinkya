import React from 'react';
import { Col, Container, Row, Button, Card ,Alert } from "react-bootstrap";


 
export default function Book({d}) 
{
  
  return (
    <Container fluid>
    {/* <Row>
        <img src={Bookcases} alt="displayimg"></img>
    </Row> */}
    <Row>
        {d.map(book => (

            <Col xs={2} style={{paddingBottom:"10px"}}>
                <Card >
                {/* <Card.Img variant="top" src={book.productImage+"/190px280"} /> */}
                    <img src={"../images/"+book[1].productImage} width="170px" height="250px"></img>
                    {/* keep image size horizontal 190 px */}
                    <Card.Body>
                   
                    <Card.Title>{book[1].productName}</Card.Title>
                        {/* <Card.Text>
                            <h6 style={{textAlign:"center"}}>{book[1].productDescShort}</h6>
                        </Card.Text> */}
                        
                        
                    </Card.Body>
                </Card>
            </Col>

        ))}
    </Row>
</Container>
   
              //   d.map(book=>
              //   (
              //       <div className="w3-col l3 s6 m4 mx-auto" >
              //             <div className="w3-container mx-5 " >
                        
                      
              //                 <img src={`../images/${book[1].productImage}`} width="190px" height="280px"  className="img-thumbnail" ></img>
              //                 <p><b>{book[1].productName}</b><br/><i> </i><br/>
              //                     Expiring in 3 days
              //                     {/* {book[1].first_name+" "+book[1].last_name} */}
              //                     </p>
              //             </div>
              //         </div> 
               
              //   )
              // )

            
            
 
      
  )
}
