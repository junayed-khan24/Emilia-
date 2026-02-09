import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import FeaturedShots from './FeaturedShots';
import Stats from './Stats';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Stats></Stats>
            <FeaturedShots></FeaturedShots>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;