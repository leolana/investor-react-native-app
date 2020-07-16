import * as Types from '../types';

// import onInit from '../actions/getAccountData';

export default (state = {}, action) => {
  switch (action.type) {
    case Types.ID_SUITABILITY:
      return {
        ...state,
        dadosSuitability: action.data,
      };

    case Types.ID_INVESTIDOR:
      return {
        ...state,
        dadosInvestidor: action.data,
      };
    default:
      return state;
  }
};
