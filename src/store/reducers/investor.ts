import * as Types from '../ActionTypes';

// import onInit from '../actions/getAccountData';

export default (state = {}, action) => {
  // if (action.type.includes(Types.REDUX_INIT)) onInit();
  console.log('E CAO', action);
  console.log('STATE CARA', state);

  switch (action.type) {
    case Types.ID_SUITABILITY:
      return {
        ...state,
        idSuitability: action.data,
      };

    case Types.ID_INVESTIDOR:
      return {
        ...state,
        idInvestidor: action.data,
      };
    default:
      return state;
  }
};
