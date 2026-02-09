import React from 'react';
import Header from './Header';
import Services from './Services';
import FeaturedShots from './FeaturedShots';
import Stats from './Stats';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Stats></Stats>
            <FeaturedShots></FeaturedShots>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;