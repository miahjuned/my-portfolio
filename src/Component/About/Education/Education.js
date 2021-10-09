import React, { useEffect, useState } from 'react';
import './Education.css';
import Allproject from "../../Home/Work/projectData.json"
import Education from "./Education.json"
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    document.title = "About me";

    const [education, setEducation] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        //============== Project Experience ===========
        setProject(Allproject)

        //============== Education ====================
        setEducation(Education)
    },[])



    return (
        <div className="container-fluid">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="block-title">
                        <h3>Education</h3>
                    </div>

                    <div className="block">

                        {   /*====================== Education===================*/
                            education.map(education => <div className="timeline"  education={education} key={education.id}>

                                <div className="timeline-item">
                                    <h4 className="item-title">{education.name}</h4>
                                    <span className="item-period">{education.period}</span>
                                    <span className="item-small">{education.institute}</span>
                                    <p className="item-descripstion">{education.descripstion}
                                        <br />
                                        <span>
                                            <strong className="activities"> Activities and Societies:</strong> 
                                            {education.activities}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6}>
                    
                    <div className="block-title">
                        <h3>Project Experience</h3>
                    </div>

                    <div className="block">

                        {   /*====================== Experience ===================*/
                            project.map(project => <div className="timeline"  project={project} key={project.id}>

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

export default AboutMe;