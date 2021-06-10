import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Work from '../Work/Work';
import NavigastionBar from '../Navbar/NavigastionBar';
import './home.css';
import Footer from '../Footer/Footer';
const Home = () => {
    document.title = "Juned portfolio website";
    return (
        <div>
            <NavigastionBar/>
            <Header></Header>
            <Work></Work>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;