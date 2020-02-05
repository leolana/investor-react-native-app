import * as Types from '../types.js'



const handleError = ({ inputError }, data) => {

    if(inputError === undefined) return [data]

    const errors = new Set(inputError)

    errors.forEach( err => (err.id === data.id) ? errors.delete(err) : null )

    return errors.add(data)

}

export default (state = {}, action) => {

    console.log(action)

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

        case Types.INPUT_ERROR: return {
            ...state, 
            inputError: handleError(state, action.data)
        }

        case Types.INVEST_AVAILABLE: return {
            ...state,
            isAvailableToInvest: action.data
        }


        default: return state;
    }
};

