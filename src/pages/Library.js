import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Button, Card ,Alert } from "react-bootstrap";
import {Link} from "react-router-dom";

function Library() {
    const [lang, setlang] = useState(0);
    console.log(lang);
    const changeGenre = useCallback((value) => {
        //console.log(value)
        setlang(value);
        // console.log(lang);
    }, [lang]);
    return (
        <Container fluid style={{ textAlign: 'left' }}>
            <Row style={{ padding: '20px' }}>
                <Col xs={2}><h2><b>bookWorm</b></h2></Col>
                <Col xs={8}><h2>Books</h2></Col>
                <Col xs={2}><Link to="/Cart"> <Button variant="primary" style={{align:'right'}}>Visit Cart{'>'}</Button></Link></Col>
            </Row>
            <Row>
                <Col xs={2}><h2><b><LangSelector updatelang={changeGenre} lang={lang} /></b></h2></Col>
                <Col xs={9}><h2><BooksDisplay lang={lang} /></h2></Col>
            </Row>
        </Container>
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

function BooksDisplay({ lang }) {

    const [books, setBooks] = useState([]);
    const IsLoggedIn=sessionStorage.getItem("IsLoggedIn");
    const uid=sessionStorage.getItem("UserId");
    const [disable,setDisable]=useState(false)
    // const []
    console.log(lang)
    useEffect(() => {
        if (lang != 0) {
            fetch("http://localhost:8080/crud/searchlang/" + lang+"/"+uid)
                .then(res => res.json())
                .then((result) => { setBooks(result); });
        }
        else {
            fetch("http://localhost:8080/crud/products/"+uid)
                .then(res => res.json())
                .then((result) => { setBooks(result); });
        }
    }, [lang]);

    // let navigate = useNavigate();

    const submitHandler=(id)=>{
        const cart={'productId':id,'userId':1,'isSelected':'n'}
        const url="http://localhost:8080/crud/addtocart"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        };
        fetch(url,requestOptions)
        .then(response => {alert('Added to cart successfully');
        setDisable(true);
    })
        .catch(error => console.log('Form submit error: ', error))
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
                        <Card>
                        {/* <Card.Img variant="top" src={book.productImage+"/190px280"} /> */}
                            <img src={book.productImage} height="280px"></img>
                            {/* keep image size horizontal 190 px */}
                            <Card.Body>
                            <Link to={"/Description/"+book.productId} style={{textDecorationLine:"none"}}>
                            <Card.Title>{book.productName}</Card.Title>
                                <Card.Text>
                                    <h6 style={{textAlign:"center"}}>{book.productDescShort}</h6>
                                </Card.Text>
                                </Link>
                                <div style={{paddingLeft:"25px"}}>
                                <Button variant="primary"  onClick={()=>{submitHandler(book.productId)}}>Add to Cart</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </Container>
    );
}

export default Library;