import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Row, Container } from 'react-bootstrap';
import AllAllblog from "./blog.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Allblog = () => {

    const [Allblog, setAllblog] = useState([]);

    useEffect(() => {
        setAllblog(AllAllblog)
    },[])


    return (
        <Container>
            <Row>
                {
                    Allblog.map(Allblog => <Col className="" xs={12} sm={12} md={6} lg={4} Allblog={Allblog} key={Allblog.id}>
                        <Card className="Allblog_Card mt-5 Card-Post">
                            
                            <CardImg  variant="top" src={Allblog.image} />

                            <Card.Body>
                                <Card.Title className="small-text-band">
                                    {Allblog.title}
                                </Card.Title>

                                <Card.Text className="text-secondary card-body-info">
                                   {Allblog.descripstion}
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="footer">
                                <div className="cardTopic">
                                    <small className="text-muted " ><strong>{Allblog.topic}</strong></small>
                                    <small className="text-muted "><strong>{Allblog.topic1}</strong></small>
                                    <small className="text-muted "> <strong>{Allblog.topic2}</strong></small>
                                    <small className="text-muted "><strong>{Allblog.topic3}</strong></small>
                                </div>
                                <div className="Allblog-btn">
                                    <a href={Allblog.github_link} className="small-text-band mr-3" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="Allblog-btn-icon" icon={faGithubSquare} />
                                    </a>
                                    <a href={Allblog.Allblog_link} className="small-text-band" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="Allblog-btn-icon" icon={faExternalLinkAlt} />
                                    </a>
                                </div>
                            </Card.Footer>

                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Allblog;