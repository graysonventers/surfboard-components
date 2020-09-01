import React, { useContext } from 'react';
import water from '../../img/water.jpg';
import SurfboardContext from '../../surfboardContext/surfboardContext';

const Navbar = () => {

    const surfboardContext = useContext(SurfboardContext);
    const { setSurfboard, surfboard} = surfboardContext; 

    const onChange = e => {
        setSurfboard(e.target.value);
    }
    const navbarContainer = {
        maxWidth: '100%',
        margin: 'auto',
        overflow: 'hidden',
        padding: '0 2rem',
        background: `url(${water})`
}

    return (

        (surfboard === null || surfboard === undefined || surfboard === 'select') ? (
            <div className="container all-center" style={navbarContainer}>
            <h2 style={{ color: '#fff', paddingTop: '2rem' }}>Choose a board to get started</h2>
                <select  className="select m-2" default="select" style={{outline: 'none', width: '40%'}} onChange={onChange}>
                    <option selected="selected" value="select">-- Select a board style --</option>
                    <option value="shortboard">Shortboard</option>
                    <option value="longboard">Longboard</option>
                    <option value="fish">Fish</option>
                    <option value="midlength">Mid-length</option>
                </select>
        </div>
        ) : (
            <div className="container all-center" style={navbarContainer}>
            <h2 style={{ color: '#fff', paddingTop: '2rem' }}>Sick! Read up, then try a different board</h2>
                <select className="select m-2" style={{outline: 'none', width: '40%'}} onChange={onChange}>
                    <option value="select">-- Select a board style --</option>
                    <option value="shortboard">Shortboard</option>
                    <option value="longboard">Longboard</option>
                    <option value="fish">Fish</option>
                    <option value="midlength">Mid-length</option>
                </select>
        </div>
        )
        
    )
};

export default Navbar;