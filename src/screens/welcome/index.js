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
  useDispatch, 
  useSelector
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

  const userData = useSelector( ({userData}) => userData)


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
        
        <IButtom title={'entrar'} onPress={ () => navigation.navigate('Login', { authenticated: false }) } />
        <IButtom title={'criar uma conta'} background={'transparent'} />

      </Buttons>
    </>
  )

  const isAuthenticated = async email => {

    const { status, data } = await Request.GET({url: UrlUsuarioPegar(email), header: 'bearer'})

    if(status === 200) dispatch(setUserData(data))
    
    return (status === 200)

  }

  useEffect( () => {

    if(userData) return setLoading(false)

    async function fetchData() {

      const email = await retrieveData('Email')

      if(!email) return setLoading(false)

      const status = await isAuthenticated(email)

      if(status) navigation.navigate('Login', { authenticated: true })

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


