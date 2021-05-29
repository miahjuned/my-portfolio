import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import firstIMG from "../../../Images/3.jpg";
import secoundImg from "../../../Images/Screenshot_3.jpg";
import ThriredImg from "../../../Images/kaanFitnessss.jpg";
import BlogPost from "../Blog/BlogPost/BlogPost";
import { Link } from 'react-router-dom';




const All_Blog_Project = [
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


const Blog = () => {
    return (
        <div className="Work_Area mt-5 pt-5">
            {/* <div className="center-under-line"></div> */}
            <Container className="">
                <Row className="">
                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <h2><span className="small-text-band">I also write </span> my feelings</h2>
                        {/* <h2><span className="small-text-band">Some of </span> my feelings</h2> */}
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={6} className="work_Row pb-5">
                        <div className="text-center">
                            <Link to="/blog" className="btn-band" target="_blank" rel="noopener noreferrer">All Article</Link>
                            <div className="center-line" ></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        All_Blog_Project.map(blogPost => <BlogPost blogPost={blogPost} key={blogPost.id} date={new Date()}></BlogPost>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;