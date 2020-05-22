import * as services from '../../services';

import * as actions from '../actions';

import Store from '../index';

const Request = services.Request;

export const getIdInvestidor = async (email) => {
  const url = services.UrlInvPegar(email);

  const resp = await Request.GET({ url, header: 'bearer' });

  if (typeof resp.data !== 'undefined') {
    Store.dispatch(actions.setIdInvestidor(resp.data));
    console.log('SOTER', Store.getState());
  } else {
    console.log('deu ruim');
  }
};
