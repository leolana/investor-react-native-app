import { Request, UrlContaPegar } from '../../../services';

import { setAccountData } from '../../actions';

import Store from '../../index';

const getAccountData = async () => {
  const resp = await Request.GET({ url: UrlContaPegar, header: 'bearer' });

  console.log(resp);

  const { status, data } = resp;

  return true;

  // if (status === 200) return data;

  // return null;
};

export default async () => {
  // get account data

  const data = await getAccountData();

  Store.dispatch(setAccountData(data));

  if (data === null) return false;

  return true;
};
