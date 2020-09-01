import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div style={{ marginTop: '5%' }}className='all-center'>
            <h1>About</h1>
            <p>This site is a shred site</p>
            <p>Please enjoy yourself</p>
            <p>Version 1.0.0</p>
            <p style={{ margin: '50px' }}>Wait...did I say "shred" site? I meant to say "test" site. What Version are we on?</p>
            <h3>
            <Link to="/">Go Home</Link>
            </h3>
        </div>
    )
};

export default About;