import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import Bookcases from './Bookcases.jpg';

function Library()
{
    const [genere,setGenere]= useState(1);
    console.log(genere);
    const changeGenre=useCallback((value)=>{
        //console.log(value)
        setGenere(value);
        // console.log(genere);
    },[genere]);
    return(
        <Container fluid style={{textAlign:'left'}}>
            <Row style={{padding:'20px'}}>
                <Col ><h2><b>bookWorm</b></h2></Col>
                <Col xs={9}><h2>Books</h2></Col>
            </Row>
            <Row>
                <Col ><h2><b><GenereSelector updateGenere={changeGenre} genere={genere}/></b></h2></Col>
                <Col xs={9}><h2><BooksDisplay genere={genere}/></h2></Col>
            </Row>
        </Container>
    );
}

function GenereSelector({updateGenere,genere})
{
    // const [newgenere,setnewgenere]=useState(genere);
    // console.log(newgenere)
    const updateNewGenere=(value)=>{
        // console.log(value);
        // setnewgenere(value);
        updateGenere(value);
    };
    return(
        <Container fluid style={{paddingTop:'100px'}}>
            <Row>
            <h1 style={{textAlign:'left'}}><Button variant="light" onClick={()=>{updateNewGenere(1);}} value="novalue"><b>All Books</b></Button></h1>
            </Row>
            <Row>
            <h1 style={{textAlign:'left'}}><Button variant="light" onClick={()=>{updateNewGenere(4);}} value="history"><b>History</b></Button></h1>
            </Row>
            <Row>
            <h1 style={{textAlign:'left'}}><Button variant="light" onClick={()=>{updateNewGenere(5);}} value="biopics"><b>Biopics</b></Button></h1>
            </Row>
            <Row>
            <h1 style={{textAlign:'left'}}><Button variant="light" onClick={()=>{updateNewGenere(3);}} value="horror"><b>Horror</b></Button></h1>
            </Row>
        </Container>
    );
}

function BooksDisplay({genere})
{

    const [books,setBooks]=useState([]);
    console.log(genere)
    useEffect(() => {
        if(genere!=1)
        {
        fetch("https://localhost:44363/api/Products/"+genere)
            .then(res => res.json())
            .then((result) => { setBooks(result); });}
        else{
            fetch("https://localhost:44363/api/Products/")
            .then(res => res.json())
            .then((result) => { setBooks(result); });
        }
    },[genere]);
    return(
    <Container fluid>
        <Row>
            <img src={Bookcases} alt="displayimg"></img>
        </Row>
        <Row>
        <table>
            <tbody>
        {books.map(book=>(
            
            <tr key={book.id}>
                <td><h3 style={{fontSize:"30px"}}>{book.product_name}</h3>
                <h6><label>Base Price:</label>{book.product_baseprice} Rs</h6>
                <h5><label>Special Price:</label>{book.product_sp_cost} Rs</h5>
                <h5><label>Offer Price:</label><b>{book.product_offerprice}</b> Rs expires on {book.product_offerprice_expiry}</h5><hr></hr>
                </td>
            </tr>
            
        ))}
        </tbody>
            </table>
        </Row>
    </Container>
    );
}

export default Library;