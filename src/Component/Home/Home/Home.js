import React from 'react';
import CardSection from '../CardSection/CardSection';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './Home.css';

const Home = () => {

    // const addVolunteer = () => {
    //     fetch('http://localhost:5000/volunteerCard' , {
    //         method:'POST', 
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(voluntear)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // };

    return (
        <div>
            <div className="bg-gradient">
                <Header></Header>
                <Hero></Hero>
            </div>
            <div>
                <CardSection></CardSection>
            </div>
        </div>
    );
};

export default Home;