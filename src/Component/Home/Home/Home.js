import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavbarArea from '../Navbar/Navbar';
import Work from '../Work/Work';
import './home.css';
const Home = () => {
    return (
        <div>
            <NavbarArea></NavbarArea>
            <Header></Header>
            <Work></Work>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;