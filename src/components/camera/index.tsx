import React, { useState } from 'react';

import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Alert, Modal } from 'react-native';

import Styles from './styles';

export const Camera = ({ isVisible, onChangePhoto, onCloseCamera }) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const { uri } = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
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
        captureAudio={false}
      >
        <Icon name="camera-iris" size={80} color={'#fff'} onPress={onTakePicture} style={Styles.buttonTakePicture} />
        <Icon name="close" size={50} color={'#fff'} onPress={onCloseCamera} style={Styles.buttonCloseCamera} />
      </RNCamera>
    </Modal>
  );
};

export default Camera;
