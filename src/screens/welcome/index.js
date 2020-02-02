import React, { useEffect, useState } from 'react'

import { 
  Buttons,
  Logo,
  LoadingView
} from './styles'

import {
  retrieveData,
} from '../../utils'

import {
  Request,
  UrlUsuarioPegar,
} from '../../services'

import {
  useDispatch
} from 'react-redux'

import {
  setUserData
} from '../../store/actions'

import {
  Background,
  Slider
} from './components'


import { white } from '../../assets/colors.js'

import { IButtom } from '../../components'

import { ActivityIndicator } from 'react-native'

export default App = ( { navigation }) => {

  // states

  const [ loading, setLoading ] = useState(true)

  // vars

  const dispatch = useDispatch()


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
        
        <IButtom title={'entrar'} onPress={ () => navigation.navigate('Login') } />
        <IButtom title={'criar uma conta'} background={'transparent'} />

      </Buttons>
    </>
  )

  const isAuthenticated = async () => {

    const email = await retrieveData('Email')

    if(!email) return null

    const { status, data } = await Request.GET({url: UrlUsuarioPegar(email), header: 'bearer'})

    if(status === 200) dispatch(setUserData(data))
    
    return (status === 200)

  }

  useEffect( () => {

    async function fetchData() {

      const status = await isAuthenticated()

      if(status) props.navigation.navigate('Login')

      else setLoading(false)
      
    }

    fetchData()

  }, [])


  // render

  return ( 
    <Background>

      <Logo fill={ white } width={120} height={120} />

      { (loading) ? renderLoading() : renderScreen() }

    </Background>
  )
}


