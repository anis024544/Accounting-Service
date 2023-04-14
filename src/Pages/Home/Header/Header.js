import NavBar from '../../Shared/NavBar/NavBar';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import  './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeaderCarousel/>
        </div>
    );
};

export default Header;