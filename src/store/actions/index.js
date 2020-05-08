import * as Types from '../types'

const createBaseAction = (type, data) => ({type, data})

export const setAccountData = data => createBaseAction(Types.ACCOUNT_DATA, data)

export const setRouteName = data => createBaseAction(Types.ROUTE_NAME, data)

export const showToast = data => createBaseAction(Types.TOAST_SHOW, data)

export const destroyToast = () => createBaseAction(Types.TOAST_DESTROY)

export const setInputError = data => createBaseAction(Types.INPUT_ERROR, data)

export const setIdSuitability = data => createBaseAction(Types.ID_SUITABILITY, data)