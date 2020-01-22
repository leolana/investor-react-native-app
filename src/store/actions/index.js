import * as Types from '../types'


const createBaseAction = (type, data) => ({type, data})

export const setUserData = data => createBaseAction(Types.USER_DATA, data)

export const setRouteName = data => createBaseAction(Types.ROUTE_NAME, data)