import { combineReducers } from 'redux';

import account from './account';
import constrols from './constrols';
import routes from './routes';
import investor from './investor';

const rootReducer = combineReducers({
  account,
  constrols,
  routes,
  investor,
});

export default rootReducer;
