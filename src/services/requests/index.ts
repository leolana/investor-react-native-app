import Axios from 'axios';

import { retrieveData } from '../../utils/persist';

class Api {
  getHeader = async (type) => {
    let auth = await retrieveData('Authorization');

    auth = type === 'bearer' ? `Bearer ${auth}` : `${auth}`;

    return { authorization: auth };
  };

  request = async (method, url, data, type = 'bearer') => {
    const axios = Axios.create({ timeout: 30000, headers: await this.getHeader(type) });

    return axios({ method, url, data })
      .then((resp) => resp)
      .catch((err) => err.response);
  };

  GET = ({ url, data, header }) => this.request('GET', url, data, header);

  POST = ({ url, data, header }) => this.request('POST', url, data, header);
  
  PUT = ({ url, data, header }) => this.request('PUT', url, data, header);

  DELETE = ({ url, data, header }) => this.request('DELETE', url, data, header);
}

export const Request = new Api();
