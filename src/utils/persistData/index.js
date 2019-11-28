import { AsyncStorage } from 'react-native';


class PersistData {

    store = async (key, data) => {
        try {

            await AsyncStorage.setItem(key, data);

        } 
        catch (error) {
            
            console.error(err)

        }
    }

    retrieve = async ( key ) => {
        try {

            const value = await AsyncStorage.getItem(key)

            if (value !== null) return value


        } 
        catch (err) {
            
            console.error(err)
        }
    }


}

export default new PersistData