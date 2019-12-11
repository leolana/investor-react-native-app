import Axios from 'axios'

import { retrieveData } from '../../utils/persist'

class Api {

    getHeader = async (type) => {

        let token = await retrieveData(AUTHORIZATION_KEY)

        console.log('token -> ', token)

        token = (type == 'bearer') ? `Bearer ${token}` : `${token}`


        if (type == 'provider') return {
            provider: "iouu",
            token: "e3eb9b7ab88facd2a7ec805a3bbcee2aff81733b"
        }

        return { "authorization": token }
        
    }

    request = async ( method, url, data, type ) => {
        
        const axios = Axios.create( { timeout: 30000, headers: await this.getHeader(type) } )

        return axios( { method, url, data } )
            .then( resp => resp )
            .catch( err => err.response )
    
    }

    GET = ( { url, data, header } ) => this.request('GET', url, data, header)

    POST = ( { url, data, header } ) => this.request('POST', url, data, header)

    PUT = ( { url, data, header } ) => this.request('PUT', url, data, header)

    DELETE = ( { url, data, header } ) => this.request('DELETE', url, data, header)

}

export const Request = new Api

export const STATUS_OK = 200

export const AUTHORIZATION_KEY = 'Authorization'
