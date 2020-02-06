import React, { useState, useEffect } from 'react'

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
  Buttom
} from './style.js'

export default App = props => {

  // props

  const { navigation } = props

  // states

  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)

  // vars

  const authenticated = navigation.getParam('authenticated', false)

  // methods

  const loginSuccessful = data => {

    storeData('Authorization', data.Authorization)

    navigation.navigate('Opportunities')

  }

  const loginRequest = async data => {

    const resp = await Request.POST( {url: UrlLogin, data, header: 'bearer'} )
    
    if (resp.status === 200) loginSuccessful(resp.data)

    else alert(resp.data.Msg)
  }

  const prepareToLoginRequest = async () => {

    if(email == null || password == null) return alert("Email e senha não podem estar vazios.")

    const form = new FormData()

    form.append('email', email.trim())

    form.append('password', password)

    loginRequest(form)

  }


  // effects

  useEffect( () => {

    if(!authenticated) return

    navigation.navigate('Opportunities')

  }, [authenticated])

  // render

  
  return ( 
    <KeyboardAvoidingView behavior="padding" enabled>

      <Welcome> Boa tarde :) </Welcome>

      <Description> Acesso sua conta </Description>
      
      <Container>

        <ITextInput title={ 'E-mail' } onChangeText={ value => setEmail(value) } />
        
        <ITextInput title={ 'Senha' } secureTextEntry={true} onChangeText={ value => setPassword(value) } />

        <Buttom title="Entrar" onPress={ () => prepareToLoginRequest() } />

      </Container>
      
    </KeyboardAvoidingView>
  )
}


