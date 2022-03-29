import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Container fluid style={{ backgroundColor: 'teal' }} >
                <Row style={{ paddingTop: "40px" }}>
                    <Col style={{ textAlign: 'center' }}>
                        <h5>Contact: <a href="mailto:help.bookworm@gmail.com">help.bookworm@gmail.com</a></h5>
                    </Col>
                </Row>
                <Row style={{ padding: "20px" }}>
                    <Col style={{ textAlign: 'center' }}>
                        <p>Copyright & copy 2021 BookWorm</p>
                        <p>Powered by Group 16 Invincibles SM VITA Mumbai.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

// class Footer extends React.Component {
//     render() {
//        return (
//         <div class="w3-container w3-teal w3-center w3-margin-top">
//             <br/>
//         <p id="contact">Contact: <a href="mailto:help.bookworm@gmail.com">help.bookworm@gmail.com</a></p>
//         <p>Copyright &copy 2021 BookWorm</p>
//         <p>Powered by Group 16 Invincibles SM VITA Mumbai.</p>
//         <br/>
//       </div>
//        )
//     }
//  }
export default Footer;
