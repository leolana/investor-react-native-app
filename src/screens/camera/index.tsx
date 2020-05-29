import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';

import { camera, Camera } from 'expo-camera';

import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView, Button, ButtonText, ContainerLine } from './styles';

export const ExpoCameraComponent = (props) => {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermision] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHaspermision(status === 'granted');
    })();
  }, []);

  const Investidor = {
    capturedPhoto,
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado</Text>;
  }

  const nextStep = () => {
    const arquivo = new FormData();
    if (flag) {
      setCapturedPhoto(null);
      setIsVisible(false);
      arquivo.set('file 2', capturedPhoto);
      console.log('Flag True', arquivo);
      props.navigation.navigate('SignUpInvestorStepEleven');
    } else {
      setFlag(true);
      arquivo.set('file', capturedPhoto);
      console.log('Flag False', arquivo);
      setCapturedPhoto(null);
      console.log(flag);
    }
  };

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpenCamera(true);
    }
  }

  return (
    <Modal transparent={false} animationType="slide" visible={isVisible}>
      <SafeAreaView style={styles.container}>
        <Camera style={{ flex: 1, justifyContent: 'flex-end' }} type={type} ref={camRef}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff" />
          </TouchableOpacity>

          {capturedPhoto && (
            <Modal animationType="slide" transparent={false}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                <Image style={{ width: '100%', height: 300, borderRadius: 15 }} source={{ uri: capturedPhoto }} />
                <ContainerLine>
                  <Button onPress={() => setCapturedPhoto(null)}>
                    <ButtonText>Repetir</ButtonText>
                  </Button>
                  <Button onPress={nextStep}>
                    <ButtonText>Continuar</ButtonText>
                  </Button>
                </ContainerLine>
              </View>
            </Modal>
          )}
        </Camera>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
});

export const ExpoCamera = {
  screen: ExpoCameraComponent,
};
