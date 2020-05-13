import { combineReducers } from 'redux';

import account from './account';
import constrols from './constrols';
import routes from './routes';

const rootReducer = combineReducers({
  account,
  constrols,
  routes,
});

export default rootReducer;
