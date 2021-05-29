import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './noMatch.css';

const NoMatch = () => {
    let location = useLocation();
    return (
        <Container className="noMatch">
            <div className="text-center">
                <h3> 
                   No match for 
                    <code>
                        {location.pathname}
                    </code>
                </h3>
                <h2>404! Something went wrong! Please try again.</h2>
                <Link to="/home" className="btn-band"> <FontAwesomeIcon icon={faArrowLeft} /> Back to home</Link>

            </div>
        </Container>
    );
};

export default NoMatch;