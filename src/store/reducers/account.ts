import * as Types from '../ActionTypes';

// import onInit from '../actions/getAccountData';

export default (state = {}, action) => {
  // if (action.type.includes(Types.REDUX_INIT)) onInit();

  switch (action.type) {
    case Types.ACCOUNT_DATA:
      return {
        ...state,
        accountData: action.data,
      };

    default:
      return state;
  }
};
