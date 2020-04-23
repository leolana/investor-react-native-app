import { StyleSheet } from 'react-native'

import {
    white,
    black
} from '../../assets/colors'

const Styles = StyleSheet.create({
    buttonTakePicture: {
        flex: 0,
        alignSelf: "center",
        position: "absolute",
        bottom: 20,
        color: white
    },
    buttonCloseCamera: {
        position: "absolute",
        top: 20,
        right: 20,
        color: white
    },
    textButton: {
        color: white,
        fontWeight: "bold",
        fontSize: 16,
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: black
    },
    containerButton: {
        width: '70%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    photo: { 
        width: '100%', 
        height: "50%" 
    }
})

export default Styles