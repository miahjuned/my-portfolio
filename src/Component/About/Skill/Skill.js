import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import html from '../../../Images/html.7a39d6a3.svg';
import css from '../../../Images/css.e95077b0.svg';
import javaScript from '../../../Images/js.fd46ca41.svg';
import Bootstrap from '../../../Images/bootstrap.98585727.svg';
import ReactJS from '../../../Images/reactjs.ee97676b.svg';
import ReactRouter from '../../../Images/react-router.ffe0bad9.svg';
import Redux from '../../../Images/redux.a9567540.svg';
import NodeJS from '../../../Images/nodejs.7ca28bcc.svg';
import ExpressJS from '../../../Images/expressjs.ea97b712.svg';
import MongoDB from '../../../Images/mongodb.452bfc77.svg';
import SASS from '../../../Images/sass.8aa78a83.svg';
import jQuery from '../../../Images/jquery.46ef1644.svg';
import Git from '../../../Images/git-icon.c60b7e5a.svg';
import MaterialUI from '../../../Images/material-ui.8e8d37c6.svg';
import WordPress from '../../../Images/wordpress.5b31135c.svg';
import Photoshop from '../../../Images/adobe-photoshop.3c5835d6.svg';
import XD from '../../../Images/adobe-xd.fc74e80f.svg';
import Figma from '../../../Images/figma.72ff3502.svg';
import Firebase from '../../../Images/firebase.e6583a29.svg';
import Netlify from '../../../Images/netlify.c779369f.svg';
import Heroku from '../../../Images/heroku.193dbd4c.svg';
import './skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBookReader, faCode, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const mySkill = [
    {
        id: 1,
        name: "HTML5",
        img: html
    },
    {
        id: 2,
        name: "CSS3",
        img: css
    },
    {
        id: 3,
        name: "javaScript",
        img: javaScript
    },
    {
        id: 4,
        name: "Bootstrap",
        img: Bootstrap
    },
    {
        id: 5,
        name: "React JS",
        img: ReactJS
    },
    {
        id: 6,
        name: "React Router",
        img: ReactRouter
    },
    {
        id: 7,
        name: "Redux",
        img: Redux
    },
    {
        id: 8,
        name: "Node JS",
        img: NodeJS
    },
    {
        id: 9,
        name: "Express JS",
        img: ExpressJS
    },
    {
        id: 10,
        name: "MongoDB",
        img: MongoDB
    },
    {
        id: 11,
        name: "SASS",
        img: SASS
    },
    {
        id: 12,
        name: "Material UI",
        img: MaterialUI
    },
    {
        id: 13,
        name: "jQuery",
        img: jQuery
    },
    {
        id: 14,
        name: "WordPress",
        img: WordPress
    },
    {
        id: 15,
        name: "Photoshop",
        img: Photoshop
    },
    {
        id: 16,
        name: "XD",
        img: XD
    },
    {
        id: 17,
        name: "Figma",
        img: Figma
    },
    {
        id: 18,
        name: "Git",
        img: Git
    },
    {
        id: 19,
        name: "Firebase",
        img: Firebase
    },
    {
        id: 20,
        name: "Netlify",
        img: Netlify
    },
    {
        id: 21,
        name: "Heroku",
        img: Heroku
    },
]
const Skill = () => {



    return (
        <section >
            <div className="skill-container">
                <Row  className="mt-4 mb-5 pb-5 pt-4">


                    <Col  xs={12} sm={12} md={7} lg={7}>
                        <div className="section-inner skill">
                            <h4>My skill</h4>
                            <div className="skill-list d-flex flex-wrap">
                            {
                                mySkill.map(skill => <div className="list-item" skill={skill} key={skill.id}>
                                    <Image src={skill.img} fluid/>
                                    <p>{skill.name}</p>
                                </div>)
                            }                                
                            </div>
                        </div>
                    </Col>


                    <Col className="mt-4" xs={12} sm={12} md={5} lg={5}>
                        <div className=" section-inner languages">
                            <h4>Languages</h4>
                            <ul className="info-list">
                                <li>
                                    <span className="title">Bangla</span>
                                    <span className="value">Native</span>
                                </li>
                                <li>
                                    <span className="title">English</span>
                                    <span className="value">Professional</span>
                                </li>
                                <li>
                                    <span className="title">Hindi</span>
                                    <span className="value">Communicative</span>
                                </li>
                            </ul>
                            <section>

                                <h4>Interest</h4>
                                <div className="skill-list d-flex flex-wrap">

                                    <span 
                                        className="d-inline-block pr-3" 
                                        tabindex="0" 
                                        data-toggle="tooltip" 
                                        data-placement="bottom" 
                                        title="Traveling">
                                        <small class="small-text-band" style={{cursor: "pointer"}} >
                                            <FontAwesomeIcon icon={faPlane} />
                                        </small>
                                    </span>

                                    <span 
                                        className="d-inline-block pr-3" 
                                        tabindex="0" data-toggle="tooltip" 
                                        data-placement="bottom" 
                                        title="Reading">
                                        <small class="small-text-band" style={{cursor: "pointer"}} >
                                            <FontAwesomeIcon icon={faBookReader} />
                                        </small>
                                    </span>
                                    <span 
                                        className="d-inline-block pr-3" 
                                        tabindex="0" data-toggle="tooltip" 
                                        data-placement="bottom" 
                                        title="Coding">
                                        <small class="small-text-band" style={{cursor: "pointer"}} >
                                            <FontAwesomeIcon icon={faCode} />
                                        </small>
                                    </span>
                                    <span 
                                        className="d-inline-block pr-3" 
                                        tabindex="0" data-toggle="tooltip" 
                                        data-placement="bottom" 
                                        title="Social Work">
                                        <small class="small-text-band" style={{cursor: "pointer"}} >
                                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                                        </small>
                                    </span>

                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Skill;