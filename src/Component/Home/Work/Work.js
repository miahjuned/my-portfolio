import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Workproject from './Work Project/Workproject';
import './Work.css';
import firstIMG from "../../../Images/3.jpg";
import kannFitness from "../../../Images/kaanFitnessss.jpg";
import fancySlider from "../../../Images/fancy-slider.png";
import SportsMania from "../../../Images/sportsMania.png";
import { Link } from 'react-router-dom';
const All_work_Project = [
    {
        id: 1,
        title: "Kaan Fitnes",
        Features1: "A full-stack Fitness website with user login/sign up option by email, Google, or Facebook implemented with firebase authentication.",
        Features2: "Admin Dashboard / User Dashboard.",
        Features3: "Here customers can buy, cancel or review their orders and the admin can add, delete or update services.",
        Features4: "It can detect a user or admin who logged in by using email. Have a User & Admin dashboard. These features are achieved using CRUD operation by Node, Express, and MongoDB.",
        image: kannFitness,
        topic: "React",
        topic1: "React-Router-Dom",
        topic2: "Bootstrap",
        topic3: "Node.js",
        topic4: "Express.js",
        topic5: "MongoDB",
        topic6: "Firebase",
        topic7: "Heroku",
        project_link:"http://kaan-fitness.web.app",
        github_link:"https://www.github.com/"
    },
    {
        id: 2,
        title: "Lawyer Portal",
        Features1: "This is a full-stack Lawyer website. Google sign in, Facebook sign in, Email & Password Sign in/Register. (all sign in methods implemented with firebase authentication.",
        Features2: "Admin Dashboard / User Dashboard where users can click the appointment button and pick the date and time and booking an appointment.",
        Features3: "It can detect a user or admin who logged in by using email. Have a User & Admin dashboard. Admins can add new lawyer and give access as an admin to anyone.",
        Features4: "These features are achieved using CRUD operation by Node, Express, and MongoDB.",
        image: firstIMG,
        topic: "React",
        topic1: "React-Router-Dom",
        topic2: "Bootstrap",
        topic3: "Node.js",
        topic4: "Express.js",
        topic5: "MongoDB",
        topic6: "Firebase",
        topic7: "Heroku",
        project_link:"http://kaan-fitness.web.app",
        github_link:"https://www.github.com/"
    },
    {
        id: 3,
        title: "Football Club Zone",
        Features1: "A user can give like, dislike, and love reactions to their favorite team and it is a PWA app-supported website",
        Features2: "A user can view the information of any team by clicking on the Explore button",
        Features3: "And it will dynamically display all the information in the Website UI including the team's banner, logo, founding year, the team's Facebook page, Twitter page, and the team's website.",
        Features4: "This is a PWA website using football club REST API",
        image: SportsMania,
        topic: "React",
        topic1: "React-Router-Dom",
        topic2: "Bootstrap",
        topic3: "REST API",
        topic4: "Firebase",
        project_link:"https://football-club-b43d2.web.app",
        github_link:"https://github.com/zunead/football-club"
    },
    {
        id: 4,
        title: "Fancy Slider",
        Features1: "This is a fancy slider REST API.",
        Features2: "Any user can create an image carousel slider on this website. To create a slider, the user needs to take a minimum of 2 images and set a minimum time of 500 milliseconds.",
        Features3: "The keyboard enter button has been implemented on the website",
        Features4: "UI image data loaded from REST API",
        image: fancySlider,
        topic: "HTML",
        topic1: "CSS3",
        topic2: "Bootstrap",
        topic3: "javascript",
        topic5: "REST API",
        project_link:"https://zunead.github.io/fancy-slider/index.html",
        github_link:"https://github.com/zunead/fancy-slider"
    }
]
const Work = () => {
    document.title ="Work project Area";
    return (
        <div >
            <Container className="Work_Area pt-5">
                <Row className="">

                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <h2>
                            <span className="small-text-band">Some of</span> my work
                        </h2>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <div className="text-center">
                            
                            <Link to="/work" className="btn-band" rel="noreferrer"> 
                                All Works
                            </Link>

                            <div className="center-line"></div>
                        </div>
                    </Col>

                </Row>
                {
                    All_work_Project.map(project => <Workproject project={project} key={project.id}></Workproject>)
                }
            </Container>
        </div>
    );
};

export default Work;
