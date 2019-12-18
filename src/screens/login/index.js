import React, { useState, useEffect } from 'react'

import {
  useDispatch,
} from 'react-redux'

import {
  setUserData
} from '../../store/actions'

import {
  ITextInput
} from '../../components'

import {
  Request,
  UrlLogin
} from '../../services'

import {
  storeData
} from '../../utils'

import { 
  KeyboardAvoidingView, 
  Welcome,
  Description,
  Container,
  ViewCheckbox,
  Text,
  Switch,
  Buttom
} from './style.js'

export default App = props => {

  const dispatch = useDispatch()

  const {

    navigation
    
  } = props

  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)

  const [autoLogin, setAutoLogin] = useState(false)

  const loginSuccessful = data => {

    storeData('Authorization', data.Authorization)

    storeData('Email', data.usuario.Email)

    navigation.navigate('Opportunities')

    dispatch(setUserData(data.usuario))

  }

  const loginRequest = async data => {

    const resp = await Request.POST( {url: UrlLogin, data, header: 'bearer'} )

    if (resp.status === 200) loginSuccessful(resp.data)

    else alert(resp.data.Msg)
  }


  const prepareToLoginRequest = async () => {

    if(email == null || password == null) return alert("Informações inválidas!")

    const form = new FormData()

    form.append('email', email.trim())

    form.append('password', password)

    loginRequest(form)

  }

  
  return ( 
    <KeyboardAvoidingView behavior="padding" enabled>

      <Welcome> Boa tarde :) </Welcome>

      <Description> Acesso sua conta </Description>
      
      <Container>

        <ITextInput title={ 'E-mail' } onChangeText={ value => setEmail(value) } />
        
        <ITextInput title={ 'Senha' } secureTextEntry={true} onChangeText={ value => setPassword(value) } />
        
        <ViewCheckbox>

          <Switch value={ autoLogin } onChange={ () => setAutoLogin(!autoLogin) } />

          <Text> Permanecer conectado </Text>

        </ViewCheckbox>

        <Buttom title="Entrar" onPress={ () => prepareToLoginRequest() } />

      </Container>
      
    </KeyboardAvoidingView>
  )
}


