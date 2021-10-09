import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import BlogPost from "../Blog/BlogPost/BlogPost";
import AllAllblog from "../../Blog/blog.json";
import { Link } from 'react-router-dom';



const Blog = () => {

    document.title = " Blog Post";
    
    
    const [Allblog, setAllblog] = useState([]);

    useEffect(() => {
        setAllblog(AllAllblog)
    },[])



    return (
        <div className="container-fluid">
            <Container className="Work_Area mt-5 pt-5">
                <Row className="">

                    <Col xs={12} sm={6} md={6} lg={6} className="work_Row">
                        <h2>
                            <span className="small-text-band">I also write</span> 
                            my feelings
                        </h2>
                    </Col>

                    <Col xs={12} sm={8} md={6} lg={6} className="work_Row pb-5">
                        <div className="allWorkBtn">
                            <Link to="/blog" className="btn-band" >
                                All Article
                            </Link>
                        </div>
                    </Col>
                    
                    {
                        Allblog.map(blogPost => <BlogPost blogPost={blogPost} key={blogPost.id} date={new Date()}></BlogPost>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;