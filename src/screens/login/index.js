import React, { useState, useEffect } from 'react'
import { CheckBox } from 'react-native'

import Button from '../../components/buttom/index.js'
import TextInput from '../../components/textInput/index.js'
import { 
  KeyboardAvoidingView, 
  Welcome,
  Description,
  ViewLogin,
  ViewCheckbox,
  Text
} from './style.js'

export default App = ( { authenticated, navigation, sendLoginRequest, data } ) => {

  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)

  useEffect(() => {

   if(authenticated) navigation.navigate('Oportunities')

   else if(authenticated != null) alert(data)

  }, [authenticated])


  const login = async () => {

    if(email == null || password == null) return alert("Informações inválidas!")

    const formdata = new FormData()

    formdata.append('email', email.trim())

    formdata.append('password', password)

    sendLoginRequest(formdata)

  }

  
  return ( 
    <KeyboardAvoidingView behavior="padding" enabled>

      <Welcome> Boa tarde :) </Welcome>

      <Description> Acesso sua conta </Description>
      
      <ViewLogin>

        <TextInput title={ 'E-mail' } onChangeText={ value => setEmail(value) } />
        
        <TextInput title={ 'Senha' } secureTextEntry={true} onChangeText={ value => setPassword(value) } />
        

        <ViewCheckbox>

          <CheckBox/>

          <Text> Permanecer conectado </Text>

        </ViewCheckbox>

      </ViewLogin>

      <Button title="Entrar" onPress={ () => login() } />

    </KeyboardAvoidingView>
  )
}


