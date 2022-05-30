import React from 'react';
import AddReview from '../AddReview/AddReview';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HansTools from '../HandTools/HansTools';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto mt-12'>
                <Services></Services>
                <HansTools></HansTools>
                <Info></Info>
                <AddReview></AddReview>
                <Contact></Contact>

            </div>

        </div>
    );
};

export default Home;