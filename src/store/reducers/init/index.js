
import {
    Request,
} from '../../../services'

  
import {
    setAccountData,
} from '../../actions'

import Store from '../../index'


const getAccountData = async () => {

    const resp = await Request.GET({url: 'http://192.168.15.47:9090/api/v1/conta/informacoes', header: 'bearer'})

    console.log(resp)

    const { status, data } = resp

    if(status === 200) return data

    return null
}


export default async () => {

    // get account data

    const data = await getAccountData()

    Store.dispatch(setAccountData(data))


}