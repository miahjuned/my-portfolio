import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contract.css';

const Contract = () => {
    return (
        <div  className="Contract-heading">
            <Container>
                <div className="Contract-title">
                        <h2 className="small-text-band">Contact with Me..</h2>
                        <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="googleMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864049.152486149!2d89.90637354971778!3d24.146434332629475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375175528aa780cf%3A0x7c96464e1f54d786!2sJuned%20muhammad!5e0!3m2!1sen!2sbd!4v1624175562899!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy"></iframe>
                            <iframe src="" frameborder="0"></iframe>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="">
                            <form action="/action_page.php">
                                <label for="fname">First Name</label>
                                <input type="text" name="firstname" placeholder="Your name.." />
                                <label for="lname">Last Name</label>
                                <input type="text" name="lastname" placeholder="Your last name.." />
                                <label for="subject">Subject</label>
                                <textarea name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contract;