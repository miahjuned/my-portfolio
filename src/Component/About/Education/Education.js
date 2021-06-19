import React, { useEffect, useState } from 'react';
import './Education.css';
import Allproject from "../../Home/Work/projectData.json"
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Education = () => {
    document.title = "About me";

    const [project, setProject] = useState([]);

    useEffect(() => {
        setProject(Allproject)
    },[])

    return (
        <div className="container-fluid">
            <Row>
                <Col sm={6} md={6} lg={6}>
                    <div className="block">
                        <div className="block-title">
                            <h3>Education</h3>
                        </div>

                        <div className="timeline">
                            {/*  <!-- Education 1 --> */}
                            <div className="timeline-item">
                                <h4 className="item-title">BBA in Accounting</h4>
                                <span className="item-period">Session 2016-17 - Running(Final Year)</span>
                                <span className="item-small">National University in Bangladesh</span>
                                <p className="item-descripstion">Currently a Final Year Student (BBA) in Business Administration in Accounting Programs.
                                <br />
                                    <span>
                                    <strong className="activities"> Activities and Societies:</strong> • Power point presentation • Web development competition. • Cultural Club member. • Team Aaccounting member • BNCC representative. • Sports Club member. • Winner of Football mini Futsal Prize 2019 On Campus Round • Semi Finalist of Cricket Hult Prize 2019 On Campus Round • Winner of Basic Computer Competition On Campus Round 2020
                                    </span>
                                </p>
                            </div>

                            {/* Education 2 */}
                            <div className="timeline-item">
                                <h4 className="item-title">Higher Secondary Certificate</h4>
                                <span className="item-period">2013-2015</span>
                                <span className="item-small">Moulvibazar govt college</span>
                                <p className="item-descripstion">I have completed my Higher Secondary Certificate from Moulvibazar govt college being a Topper of my class.
                                <br />
                                    <span>
                                    <strong className="activities"> Activities and Societies:</strong> • Power point presentation • Web development competition. • Cultural Club member. • BNCC representative. • Sports Club member. 
                                    </span>
                                </p>
                            </div>


                            {/* Education 3 */}
                            <div className="timeline-item">
                                <h4 className="item-title">Secondary School Certificate</h4>
                                <span className="item-period">2003-2013</span>
                                <span className="item-small">Dighal Bhak High School</span>
                                <p className="item-descripstion">
                                    I have completed my Secondary School Certificate from Dighal Bhak High Schol being a Topper of my class.
                                    <br />
                                    <span>
                                    <strong className="activities"> Activities and Societies:</strong> • Web development competition. • Cultural Club member. • BNCC representative. • Sports Club member.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6}>
                    <div className="block">
                        <div className="block-title">
                            <h3>Experience</h3>
                        </div>

                        {/* Experience */}
                            {
                                project.map(project => <div className="timeline" xs={12} sm={12} md={6} lg={4} project={project} key={project.id}>

                                    <div className="timeline-item">
                                        <h4 className="item-title">{project.title}</h4>
                                        <span className="item-period">{project.date}</span>
                                        <div className="item-small cardTopic">
                                            <small className="text-muted " ><strong>{project.topic}</strong></small>
                                            <small className="text-muted "><strong>{project.topic1}</strong></small>
                                            <small className="text-muted "> <strong>{project.topic2}</strong></small>
                                            <small className="text-muted "><strong>{project.topic3}</strong></small>
                                        </div>
                                        <p className="item-descripstion">{project.Features1}</p>
                                                
                                        <div className="project-btn">
                                            <a href={project.github_link} className="small-text-band mr-3" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon className="project-btn-icon" icon={faGithubSquare} />
                                            </a>
                                            <a href={project.project_link} className="small-text-band" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon className="project-btn-icon" icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Education;