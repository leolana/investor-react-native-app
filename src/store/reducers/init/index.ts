import { Request, UrlContaPegar } from '../../../services';

import { setAccountData } from '../../actions';

import Store from '../../index';

const getAccountData = async () => {
  const resp = await Request.GET({ url: UrlContaPegar, header: 'bearer' });

  console.log(resp);

  // const { status, data } = resp;

  return {
    Bloqueio: {
      Data: '0001-01-01T00:00:00Z',
      FimBloqueio: '0001-01-01T00:00:00Z',
    },
    Email: 'ksantana@iouu.com.br',
    HasInvestor: true,
    HasSuitability: true,
    Nome: 'Kaique Santana Pereira',
    NotificacoesInvestidor: {},
    Status: 'cadastro-concluido',
    UsuarioId: '5c48c42bc14a4f0001d3a770',
  };
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
