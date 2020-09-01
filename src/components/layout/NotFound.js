import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='all-center' style={{ marginTop: '10%', color: '#333'}}>
            <h1>Page Not Found...board breaking news</h1>
            
            <Link to="/">Click here to head back to your home break</Link>
        </div>
    )
};

export default NotFound;