import React, { useEffect, useState } from 'react'

import { 
  Buttons,
  Logo,
  LoadingView
} from './styles'

import {
  useSelector
} from 'react-redux'

import {
  Background,
  Slider
} from './components'


import { white } from '../../assets/colors.js'

import { IButtom } from '../../components'

import { ActivityIndicator } from 'react-native'

export const WelcomeComponent = ( { navigation }) => {

  // states

  const [ loading, setLoading ] = useState(true)

  // vars

  const accountData = useSelector( ({accountData}) => accountData)

  // methods

  const renderLoading = () => (
    <LoadingView>
      <ActivityIndicator size="large" />
    </LoadingView>
  )

  const renderScreen = () => (
    <>
      <Slider/>

      <Buttons>
        
        <IButtom 
          title={'entrar'} 
          onPress={ () => navigation.navigate('Login', { authenticated: false }) } 
        />
        <IButtom 
          title={'criar uma conta'} 
          onPress={ () => navigation.navigate('SignUpUser') } background={'transparent'} 
        />

      </Buttons>
    </>
  )


  // effects

  useEffect( () => {

    console.log(accountData)

    if(accountData === undefined) return

    if(accountData === null) setLoading(false)

    else navigation.navigate('Login', { authenticated: true })

  }, [accountData])


  // render

  return ( 
    <Background>

      <Logo fill={ white } width={120} height={120} />

      { (loading) ? renderLoading() : renderScreen() }

    </Background>
  )
}

export const Welcome = {
  screen: WelcomeComponent,
  navigationOptions: {
    headerShown: false,
  }
}


