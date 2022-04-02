import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Button, Card ,Alert } from "react-bootstrap";
import {Link} from "react-router-dom";
import Navigationbar from "./Navigationbar";

function Library() 
{
   
    const [lang, setlang] = useState(0);
    const [tran,setTran]=useState("");
    console.log(lang);
    const changeGenre = useCallback((value) => {
        //console.log(value)
        setlang(value);
        // console.log(lang);
    }, [lang]);

    const onButton= (event) => 
    {
        if(event.target.value=="buy")
        setTran("buy");
        else
        setTran("rent")
    };




    return (
        <><Navigationbar/>
        <Container fluid style={{ textAlign: 'left' }}>
            <Row style={{ padding: '20px' }}>
                <Col xs={2}><h2><b>bookWorm</b></h2></Col>
                <Col xs={8}><h2>Books</h2></Col>
               {/*  <Col xs={6}>
                <div class="btn-group" >
                    <button id="bt1" onClick={onButton}  value="buy" class="button">Buy</button>
                    <button id="bt2" onClick={onButton} value="rent"  class="button">Rent</button>
                        </div>
                </Col> */}
                <Col xs={2}><Link to="/Cart"> <Button variant="primary" style={{align:'right'}}>Visit Cart{'>'}</Button></Link></Col>
            </Row>
            <Row>
                <Col xs={2}><h2><b><LangSelector updatelang={changeGenre} lang={lang} /></b></h2></Col>
                <Col xs={9}><h2><BooksDisplay lang={lang} /></h2></Col>
            </Row>
        </Container></>
    );
}

function LangSelector({ updatelang, lang }) {
    // const [newlang,setnewlang]=useState(lang);
    // console.log(newlang)
    const updateNewlang = (value) => {
        // console.log(value);
        // setnewlang(value);
        updatelang(value);
    };
    return (
        <Container style={{ paddingTop: '100px' }}>
            <Row style={{paddingBottom:"20px"}}>
                <Button variant="light" onClick={() => { updateNewlang(0); }} value="novalue"><h5 style={{ textAlign: 'left' }}><b>All Books</b></h5></Button>
            </Row>
            <Row style={{paddingBottom:"20px"}}>
                <Button variant="light" onClick={() => { updateNewlang(1); }} value="English"><h5 style={{ textAlign: 'left' }}><b>English</b></h5></Button>
            </Row>
            <Row style={{paddingBottom:"20px"}}>
                <Button variant="light" onClick={() => { updateNewlang(2); }} value="Hindi"><h5 style={{ textAlign: 'left' }}><b>Hindi</b></h5></Button>
            </Row>
            <Row style={{paddingBottom:"20px"}}>
                <Button variant="light" onClick={() => { updateNewlang(3); }} value="Marathi"><h5 style={{ textAlign: 'left' }}><b>Marathi</b></h5></Button>
            </Row>
            <Row style={{paddingBottom:"20px"}}>
                <Button variant="light" onClick={() => { updateNewlang(4); }} value="Kokani"><h5 style={{ textAlign: 'left' }}><b>Kokani</b></h5></Button>
            </Row>
        </Container>
    );
}

function BooksDisplay({ lang }) 
{
    const UserId=sessionStorage.getItem("UserId");
    const [books, setBooks] = useState([]);
    // const []
    console.log(lang)
    useEffect(() => {
        if (lang != 0) {
            fetch("http://localhost:8080/crud/searchlang/" + lang)
                .then(res => res.json())
                .then((result) => { setBooks(result); });
        }
        else 
        {
            
            fetch("http://localhost:8080/crud/products")
                .then(res => res.json())
                .then((result) => { setBooks(result); });
        }
    }, [lang]);

    // let navigate = useNavigate();

    const submitHandler=(id)=>
    {

        const cart={'productId':id,'userId':UserId,'isSelected':'Y'}
        const url="http://localhost:8080/crud/addtocart"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        };
        fetch(url,requestOptions)
        .then(res => res.json())
        .then((result) => {alert(result)})
        
       
        // Navigate('/');
    
    }
    return (
        <Container fluid>
            {/* <Row>
                <img src={Bookcases} alt="displayimg"></img>
            </Row> */}
            <Row>
                {books.map(book => (

                    <Col xs={3} style={{padding:"5px"}}>
                        <Card >
                        {/* <Card.Img variant="top" src={book.productImage+"/190px280"} /> */}
                            <img src={"../images/"+book.productImage} width="170px" height="250px"></img>
                            {/* keep image size horizontal 190 px */}
                            <Card.Body>
                            <Link to={"/Description/"+book.productId} style={{textDecorationLine:"none"}}   >
                            <Card.Title><b>{book.productName}</b></Card.Title>
                                </Link>
                                <div >
                                <Button   variant="primary"  onClick={()=>{submitHandler(book.productId)}} >Add to Cart</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>   

                ))}
            </Row>
        </Container>
    );
}

export default Library;