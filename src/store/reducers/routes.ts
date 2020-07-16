import * as Types from '../ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case Types.ROUTE_NAME:
      return {
        ...state,
        routeName: action.data,
      };

    default:
      return state;
  }
};
