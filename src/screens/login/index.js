import React, { useState } from 'react'
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

import Api from '../../services/requests/index.js'
import Urls from '../../services/urls/index.js'

import PersistData from '../../utils/persistData/index.js'

const App = () => {


  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)


  const login = async () => {

    let data = new FormData()

    data.append('email', (email).trim())
    data.append('password', password)

    const  {status, data:resp } = await (new Api).POST({
        url: Urls.login,
        data,
        header: 'bearer'
    })
    

    console.log(resp)

    if(status == 200 ) {

      (new PersistData).store('token', resp.Authorization)
    }

    else alert(resp.Msg)


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

export default App

