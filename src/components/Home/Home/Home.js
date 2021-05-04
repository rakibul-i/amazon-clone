import React from 'react';
import banner from '../../../image/banner1.jpg';
import Products from '../Products/Products';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <img src={banner} className="home__image"  alt=""/>

            <Products/>
        </div>
    );
};

export default Home;