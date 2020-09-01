import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='all-center' style={{ color: '#333'}}>
            
            <h1>About</h1>
            <p>This site is a shred site</p>
            <p>Please enjoy yourself</p>
            <p>Version 1.0.0</p>
            <p style={{ marginTop: '100px' }}>Wait...did I say "shred" site? I meant to say "test" site. What Version are we on?</p>
            <h3 style={{ paddingTop: '10%' }}>
            <Link to="/">Go Home</Link>
            </h3>
            
            </div>
            
            
        </div>
    )
};

export default About;