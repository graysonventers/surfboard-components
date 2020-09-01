import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
            <span style={{ margin: '2%', display: 'block', wordSpacing: '40px', fontWeight: '500'}}>
                
                <Link to="/about">About</Link>
            </span>

            <div className="all-center bg-primary p-1" style={{marginBottom: '3%' }}>
                <h1 className="large" style={{ fontWeight: '200' }}>How Surfboard Components React</h1>
                <h3 style={{ fontWeight: '500' }}>Understand the common surfboard and what makes it go</h3>
            </div>
        </div>
    )
}

export default Header;