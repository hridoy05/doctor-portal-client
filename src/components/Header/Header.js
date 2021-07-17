import React from 'react';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navabar from '../Navbar/Navabar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navabar></Navabar>
            <Banner></Banner>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;