import { connect } from 'react-redux'

import App from '../screens/login/index.js'

import { Request, STATUS_OK, AUTHORIZATION_KEY } from '../services/requests/index.js'

import { Login } from '../services/urls/index.js'

import PersisData from '../utils/persistData/index.js'

import * as Types from './actionTypes.js'

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    data: state.auth.data
});

const mapDispatchToProps = dispatch => ({
    sendLoginRequest: data => dispatch(loginRequest(data))
})

const setAction = (type, data) => ( { type, data } )

const handlerAuth = ( dispatch, { data } ) => {

    PersisData.store(AUTHORIZATION_KEY, data.Authorization)

    dispatch( setAction(Types.AUTH_SUCCESS, data) )
}

const loginRequest = data => {

    return async dispatch => {

        dispatch(setAction(Types.AUTH_PENDING))

        const config = { url: Login, data, header: 'bearer' }

        const resp = await Request.POST(config)

        if(resp.status === STATUS_OK) handlerAuth(dispatch, resp)

        else dispatch( setAction(Types.AUTH_ERROR, resp.data) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
