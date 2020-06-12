import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image, Alert } from 'react-native';

import { camera, Camera } from 'expo-camera';

import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView, Button, ButtonText, ContainerLine, Title } from './styles';
import { useSelector } from 'react-redux';
import { Request, UrlCadastroInvestidorDocs } from '../../services';
import { createReadStream } from 'fs';

export const ExpoCamera = ({ isVisible, navigation, step, setOpenCamera, idInvestidor }) => {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermision] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [flag, setFlag] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHaspermision(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado</Text>;
  }

  const atualizarDadosInvestidor = async (picture) => {
    const data = { file: picture };
    const resp = await Request.POST({
      url: UrlCadastroInvestidorDocs(idInvestidor, 'identidade'),
      data,
      header: 'bearer',
    });

    console.log('O DATA', resp.data);
    console.log('O STATUS', resp.status);
    // if (resp.status === 200) {
    //   navigation.navigate('SignUpInvestorStepEleven');
    // } else {
    //   Alert.alert('Ocorreu um erro', 'Não foi possível enviar a imagem');
    // }
    return resp.status;
  };

  const nextStep = async () => {
    if (flag) {
      let status = await atualizarDadosInvestidor(photo);
      if (status === 200) {
        console.log('deu bom 2');
        setOpenCamera(false);
        setCapturedPhoto(null);
        navigation.navigate('SignUpInvestorStepEleven');
      } else Alert.alert('Ocorreu um erro', 'Não foi possível enviar a foto');
    } else {
      let status = await atualizarDadosInvestidor(photo);
      if (status === 200) {
        console.log('deu bom 1');
        setFlag(true);
        setCapturedPhoto(null);
      } else Alert.alert('Ocorreu um erro', 'Não foi possível enviar a foto');
    }
  };

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync({ base64: true, quality: 0.3 });
      let newstr = data.base64.replace('data:image/jpg;base64,', '');
      setCapturedPhoto(data.uri);
      setPhoto(newstr);
      setOpenCamera(true);
    }
  }

  return (
    <Modal transparent={false} animationType="slide" visible={isVisible}>
      {!flag && <Title>FRENTE</Title>}
      {flag && <Title>VERSO</Title>}
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
