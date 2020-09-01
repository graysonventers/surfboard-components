import React, { useReducer } from 'react';
import SurfboardContext from './surfboardContext';
import SurfboardReducer from './surfboardReducer';
import data from '../surfboardData';

import {
    SET_SURFBOARD,
    CLEAR_SURFBOARD
} from '../types';

const SurfboardState = props => {
    const initialState = {
        surfboard: null
    };
    
    const [state, dispatch] = useReducer(SurfboardReducer, initialState);

                    // ACTIONS BELOW //
    
    // SET_SURFBOARD
    const setSurfboard = surfboard => {
        dispatch({ type: SET_SURFBOARD, payload: data[surfboard] });
    }
    
    // CLEAR_SURFBOARD
    const clearSurfboard = () => dispatch({ type: CLEAR_SURFBOARD });
    
    return <SurfboardContext.Provider
        value={{
            loading: state.loading,
            surfboard: state.surfboard,
            setSurfboard,
            clearSurfboard
        }}
        >
            {props.children}
        </SurfboardContext.Provider>
};

export default SurfboardState;


