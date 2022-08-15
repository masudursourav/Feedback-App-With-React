import React from 'react';

const Header = () => {
    const headerStyle ={
        backgroundColor: 'rgba(0,0,0,0.4)',

    }
    return (
        <header style={headerStyle}>
            <div className="container">
              <h2>Feedback App With React</h2>  
            </div>
        </header>
    );
};

export default Header;