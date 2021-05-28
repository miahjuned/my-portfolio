import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Workproject from './Work Project/Workproject';
import './Work.css';
import firstIMG from "../../../Images/3.jpg";
import secoundImg from "../../../Images/Screenshot_3.jpg";
import ThriredImg from "../../../Images/kaanFitnessss.jpg";
const All_work_Project = [
    {
        id: 1,
        title: "First test project",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: firstIMG,
        project_link: "https://www.upwork.com/",
        github_link:"https://www.github.com/"
    },
    {
        id: 2,
        title: "secound test project",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: secoundImg,
        project_link: "https://www.facebook.com/",
        github_link:"https://www.google.com/"
    },
    {
        id: 3,
        title: "Thrired test project",
        descripstion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur in est, delectus fugit minima maiores vitae qui accusantium, similique numquam ratione recusandae deleniti",
        image: ThriredImg,
        project_link: "https://www.facebook.com/",
        github_link:"https://www.google.com/"
    },
]
const Work = () => {
    return (
        <div className="Work_Area pt-5">
            {/* <div className="center-under-line"></div> */}
            <Container className="">
                <Row className="">
                    <Col md={3} className="work_Row">
                        <h2><span className="small-text-band">Some of</span> my work</h2>
                    </Col>
                    <Col md={7} className="work_Row">
                        <div className="text-center">
                            <div className="center-line"></div>
                            <a href="#" className="btn-band">All Works</a>
                        </div>
                    </Col>
                </Row>
                {
                    All_work_Project.map(project => <Workproject project={project} key={project.id}></Workproject>)
                }
{/*                 
                <Workproject></Workproject> */}
            </Container>
        </div>
    );
};

export default Work;








                    {/* <Col xl={6} md={6} className="bg-primary  ">
                        <div className="text-center bg-warning">
                            <h2><span className="small-text-band">Some of</span> my work</h2>
                        </div>
                    </Col>
                    <Col xl={6} md={6} className="text-center bg-dark">
                        <div className="text-center bg-warning">
                            <div className="center-line"></div>
                            <a href="#" className="btn-band-outline">All Works</a>
                        </div>
                    </Col> */}