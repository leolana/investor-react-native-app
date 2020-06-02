import * as services from '../../services';

import * as actions from '../actions';

import Store from '../index';

const Request = services.Request;

export const getIdInvestidor = async (email) => {
  const url = services.UrlInvPegar(email);

  const resp = await Request.GET({ url, header: 'bearer' });

  if (typeof resp.data !== 'undefined') {
    Store.dispatch(actions.setIdInvestidor(resp.data));
    // console.log('SOTER', Store.getState());
  } else {
    // console.log('deu ruim');
  }
};

export const getSuitabilityId = async () => {
  const resp = await Request.GET({
    url: 'https://server-test.iouu.com.br/api/v1/suitability',
  });

  if (resp.status === 200) Store.dispatch(actions.setIdSuitability(resp.data.insertedIds[0]));

  return;
};
