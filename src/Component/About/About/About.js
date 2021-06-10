import React from 'react';
import { Container } from 'react-bootstrap';
import Education from '../Education/Education';
import MyInfo from '../My_Info/My_Info';
import Skill from '../Skill/Skill';
import NavigastionBar from '../../Home/Navbar/NavigastionBar';
import './About.css';
import Footer from '../../Home/Footer/Footer';

const About = () => {
    return (
        <div>
            <NavigastionBar></NavigastionBar>
            <Container>
                <section>
                    <div className="section-inner about-me">
                        <div className="page-header">
                            <h2>About Me</h2>
                        </div>
                    </div>
                </section>
                <MyInfo></MyInfo>
                <Skill></Skill>
                <Education></Education>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;