import { combineReducers } from 'redux';

import account from './account';
import controls from './controls';
import routes from './routes';
import investor from './investor';

const rootReducer = combineReducers({
  account,
  controls,
  routes,
  investor,
});

export default rootReducer;
