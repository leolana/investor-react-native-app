import { AsyncStorage } from 'react-native';


class PersistData {

    store = async (key, data) => {
        try {

            await AsyncStorage.setItem(key, data);

        } 
        catch (error) {
            
            console.log(err)

        }
    }

    retrieve = async ( key ) => {
        try {

            const value = await AsyncStorage.getItem(key)

            if (value !== null) return value


        } 
        catch (err) {
            
            console.log(err)
        }
    }


}

export default PersistData