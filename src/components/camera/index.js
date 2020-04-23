import React, { useState } from 'react'

import { RNCamera } from 'react-native-camera'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {
    Alert,
    TouchableOpacity,
    Text,
    Modal,
    ImageBackground,
    View,
    Image

} from 'react-native'

import Styles from './styles'

export const Camera = ({ isVisible, onChangePhoto, onCloseCamera, setOpenCamera, props, nextStep }) => {
    const [camera, setCamera] = useState()
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)

    const onTakePicture = async () => {
        try {
            const { uri } = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true,
            })
            setCapturedPhoto(uri)
            setOpen(true)
            onChangePhoto(uri)
        } catch (error) {
            Alert.alert('Erro', 'Houve um erro ao tirar a foto.')
        }
    }


    const testar = () => {
        setOpen(false)
        props.navigation.navigate(nextStep)
    }

    return (
        <>
            <Modal animationType="slide" transparent={false} visible={isVisible}>
                <RNCamera
                    ref={ref => setCamera(ref)}
                    style={{ flex: 1 }}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: 'Permissão',
                        message: 'Precisamos da sua permissão para usar a câmera.',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancelar',
                    }}
                    captureAudio={false}>
                    <Icon
                        name="camera-iris"
                        size={80}
                        onPress={onTakePicture}
                        style={Styles.buttonTakePicture}
                    />
                    <Icon
                        name="close"
                        size={50}
                        onPress={onCloseCamera}
                        style={Styles.buttonCloseCamera}
                    />
                </RNCamera>
            </Modal>

            {
                capturedPhoto &&
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={open}
                >
                    <View style={Styles.containerModal}>

                        <Image
                            style={Styles.photo}
                            source={{ uri: capturedPhoto }}
                        />
                        <View style={Styles.containerButton}>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpenCamera(true)}>
                                <Text style={Styles.textButton}>
                                    Repetir
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 10 }} onPress={testar}>
                                <Text style={Styles.textButton}>
                                    Ok
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>
            }

        </>
    )
}

export default Camera