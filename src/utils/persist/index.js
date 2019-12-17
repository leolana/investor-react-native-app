import { AsyncStorage } from 'react-native';

export const storeData = async (key, data) => {
    try {

        await AsyncStorage.setItem(key, data);

    } 
    catch (error) {
        
        console.error(err)

    }
}

export const retrieveData = async ( key ) => {
    try {

        const value = await AsyncStorage.getItem(key)

        if (value !== null) return value


    } 
    catch (err) {
        
        console.error(err)
    }
}

export const removeData = async ( key ) => {
    try {

        await AsyncStorage.removeItem(key)

    } 
    catch (err) {
        
        console.error(err)
    }
}