import {
    SET_SURFBOARD,
    CLEAR_SURFBOARD
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_SURFBOARD:
            return {
                ...state,
                surfboard: action.payload,
            }
        case CLEAR_SURFBOARD:
            return {
                ...state,
                surfboard: null,
            }
        default:
            return state;
    }
};