import React from 'react';
import Header from './Header/Header';
import Service from '../Service/Service';
import About from './About/About';
import OurServices from '../OurServices/OurServices';
import OurCapability from '../OurCapability/OurCapability';
import MyTestimonials from './MyTestimonials/MyTestimonials';



const Home = () => {
    return (
        <div>
            <Header></Header>
           <About/>
            <Service/>
            <OurServices/>
            <OurCapability/>
            <MyTestimonials/>
        </div>
    );
};

export default Home;