import React from 'react';
import NavbarComponent from './NavbarComponent';
import CarourselComponent from './CarouselComponent';

const Head = () => {
    return (
        <>
        <div style={{maxWidth: '1500px', margin: 'auto', paddingTop: '10px'}}>
        <NavbarComponent />
        <CarourselComponent />
        </div>
        </>
    );
};

export default Head;