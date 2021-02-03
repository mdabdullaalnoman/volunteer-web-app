import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-area py-3 py-md-5">
            <h3 className="lato">I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className="hero-area-inside">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" data-toggle="tooltip" data-placement="top" title="search here"><i className="fa fa-search"></i></button>
            </div>
        </div>
    );
};

export default Hero;