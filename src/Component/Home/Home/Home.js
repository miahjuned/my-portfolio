import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Work from '../Work/Work';
import './home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Work></Work>
            <Blog></Blog>
        </div>
    );
};

export default Home;