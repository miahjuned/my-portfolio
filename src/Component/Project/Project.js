import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Row, Container } from 'react-bootstrap';
import Workproject from "../Home/Work/projectData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Project = () => {

    const [project, setProject] = useState([]);

    useEffect(() => {
        setProject(Workproject)
    },[])


    return (
        <Container>
            <Row>
                {
                    project.map(project => <Col className="" xs={12} sm={12} md={6} lg={4} project={project} key={project.id}>
                        <Card className="project_Card mt-5 Card-Post">
                            
                            <CardImg  variant="top" src={project.image} />

                            <Card.Body>
                                <Card.Title className="small-text-band">
                                    {project.title}
                                </Card.Title>

                                <Card.Text className="text-secondary card-body-info">
                                    <ul>
                                        <strong>Features:</strong>
                                        <li>
                                            {project.Features1 ? `❖ ${project.Features1}` : ''}
                                        </li>
                                        <li>
                                            {project.Features2 ? `❖ ${project.Features2}` : ''}
                                        </li>
                                        <li>
                                            {project.Features3 ? `❖ ${project.Features3}` : ''}
                                        </li>
                                        <li>
                                            {project.Features4 ? `❖ ${project.Features4}` : ''}
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="footer">
                                <div className="cardTopic">
                                    <small className="text-muted " ><strong>{project.topic}</strong></small>
                                    <small className="text-muted "><strong>{project.topic1}</strong></small>
                                    <small className="text-muted "> <strong>{project.topic2}</strong></small>
                                    <small className="text-muted "><strong>{project.topic3}</strong></small>
                                </div>
                                <div className="project-btn">
                                    <a href={project.github_link} className="small-text-band mr-3" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="project-btn-icon" icon={faGithubSquare} />
                                    </a>
                                    <a href={project.project_link} className="small-text-band" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="project-btn-icon" icon={faExternalLinkAlt} />
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

export default Project;