import { USER_DATA } from '../types.js'

export default (state = {}, action) => {

    switch (action.type) {

        case USER_DATA: return { 
            ...state, 
            userData: action.data
        
        };


        default: return state;
    }
};

