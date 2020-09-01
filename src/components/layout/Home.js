import React, { Fragment } from 'react';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <Body />
        </Fragment>
    )
}

export default Home;