import *  as Actions from '../actions/actionTypes.js'

export const auth = (state = {}, action) => {

    switch (action.type) {

        case Actions.AUTH_PENDING: return { 
            ...state, 
            authenticated: null,
            data: action.data
        
        };

        case Actions.AUTH_ERROR: return { 
            ...state, 
            authenticated: false,
            data: action.data.Msg
        
        };

        case Actions.AUTH_SUCCESS: return { 
            ...state, 
            authenticated: action.data.Authorization,
            data: action.data.usuario
        
        };

        default: return state;
    }
};

