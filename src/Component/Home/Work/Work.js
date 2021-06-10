import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Workproject from './Work Project/Workproject';
import './Work.css';
import firstIMG from "../../../Images/3.jpg";
import secoundImg from "../../../Images/Screenshot_3.jpg";
import ThriredImg from "../../../Images/kaanFitnessss.jpg";
import NavigastionBar from "../Navbar/NavigastionBar";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const All_work_Project = [
    {
        id: 1,
        title: "Simple javaScript and HTML project",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: firstIMG,
        project_link: "https://www.upwork.com/",
        topic: "HTML5",
        topic1: "CSS",
        topic2: "JavaScript",
        topic3: "React Router",
        github_link:"https://www.github.com/"
    },
    {
        id: 2,
        title: "Football Club Zone",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: secoundImg,
        project_link: "https://www.facebook.com/",
        topic: "Mongo DB",
        topic1: "Express js",
        topic2: "Node js",
        topic3: "React Router",
        github_link:"https://www.google.com/"
    },
    {
        id: 3,
        title: "Kaan Fitness Club",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: ThriredImg,
        project_link: "https://www.facebook.com/",
        topic: "Metarial UI",
        topic1: "Node js",
        topic2: "React Router",
        topic3: "Express",
        github_link:"https://www.google.com/"
    },
]
const Work = () => {
    document.title ="Work project Area";
    return (
        <div >
            <NavigastionBar></NavigastionBar>
            <Container className="Work_Area pt-5">
                <Row className="">
                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <h2><span className="small-text-band">Some of</span> my work</h2>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <div className="text-center">
                            <Link to="/work" className="btn-band" rel="noreferrer"> All Works</Link>
                            <div className="center-line"></div>
                        </div>
                    </Col>
                </Row>
                {
                    All_work_Project.map(project => <Workproject project={project} key={project.id}></Workproject>)
                }
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Work;
