import React from "react";
import { Carousel, Button, Container} from 'react-bootstrap';
import Book2 from './Book2.png';
import Book3 from './book3.png';
import Book5 from './book5.jpg';
import BookCases from './Bookcases.jpg';
import { useState } from "react";

function Home() {
    return (
        <Container >
        <div>
            <HomeHeader />
            <Slides />
            <Subscribepanel/>
        </div>
        </Container>
    );
}

function HomeHeader() {
    return (
        <div>
            <h1 style={{ paddingTop: '30px' }}>WELCOME TO BOOKWORM</h1>
        </div>
    );
}

function Slides() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const slidestyle1 = {
        padding: '35px'
    }
    const imgstyle = {
        height: '400px'
    }
    const imgstyle2 = {
        borderRadius: 1000 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    }

    return (
        <div>
            <div style={slidestyle1} >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={imgstyle}
                            src={Book2}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={imgstyle}
                            src={Book3}
                            alt="Second slide"
                        />


                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={imgstyle}
                            src={Book5}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ fontSize: '50px', fontFamily: 'Arial Narrow Bold', textAlign: 'center', color: "blueviolet", padding: '30px' }}>
                <h2><b>Start Reading at India's <br></br>Online Library</b></h2>
            </div>
            <div style={slidestyle1}>
                <h3>Buy, Lease or Get Library </h3>
                <img
                    style={imgstyle2}
                    src={BookCases}
                    roundedCircle='true'
                    fluid
                />
                <h3>& </h3>
                <h3>Read Online</h3>
            </div>
            <div>
                <p style={{align:'center',fontSize:'30px'}}>
                    <h2>
                        <b >SPECIALLY CURATED LEARNING EXPERIENCES</b>
                    </h2>
                    <h2>
                        <b >FOR</b>
                    </h2>
                    <h2>
                        <b> KIDS & ADULTS</b>
                    </h2>
                </p>
                <p style={{align:'center'}}>
                    <h4>We curate a set of learning experiences across creative & intellectual pursuits by </h4>
                    <h4> partnering with the best in the business. We bring these learning experiences to</h4>
                    <h4> communities around BookWorm libraries</h4>
                </p>
            </div>
            <div>
                <h2 style={{backgroundColor:'blue',fontFamily:"cursive"}}>HAPPY READING!!!!!!</h2>
            </div>
        </div>
    );
}

function Subscribepanel()
{
    return(
        <div style={{backgroundColor:'black',textAlign:'left',padding:'20px',color:'ghostwhite'}}>
            <h1>Subscribe</h1>
            <h5 >To get special offers and VIP treatment:</h5>
            <input type={"text"} className="col-12"></input>
            <h1></h1>
            <Button variant="danger" >Subscribe</Button>
        </div>
    );
}


export default Home;