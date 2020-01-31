import * as Types from '../types.js'

export default (state = {}, action) => {

    switch (action.type) {

        case Types.USER_DATA: return { 
            ...state, 
            userData: action.data
        
        };

        case Types.ROUTE_NAME: return { 
            ...state, 
            routeName: action.data
        
        };

        case Types.TOAST_SHOW: return { 
            ...state, 
            toastParams: action.data
        
        };

        case Types.TOAST_DESTROY: return { 
            ...state, 
            toastParams: null
        };


        default: return state;
    }
};

