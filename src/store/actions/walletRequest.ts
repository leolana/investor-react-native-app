import * as services from '../../services';

import * as actions from '../actions';

import Store from '../index';

const Request = services.Request;

export const getIdInvestidor = async (email) => {
  const url = services.UrlInvPegar(email);

  const resp = await Request.GET({ url, header: 'bearer' });

  if (typeof resp.data === 'undefined') {
    resp.data = { ...resp.data, erro: 'Resposta vazia' };
    return resp.data;
  }

  Store.dispatch(actions.setIdInvestidor(resp.data));
  resp.data = { ...resp.data, erro: '' };
  return resp.data;
};
