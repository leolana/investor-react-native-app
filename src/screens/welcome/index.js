import React from 'react'

import { 
    Square, 
    Title, 
    Text, 
    Container,
    Buttons,
    BackgroundGradiant,
    FlatList,
    Logo,
    Dots,
    PageIndicator
} from './style.js'

import { Dimensions, Animated } from 'react-native'

import { dusk, twilight, white, darkDusk } from '../../assets/colors.js'

import Buttom from '../../components/buttom/index'

export default App = ( { navigation }) => {

  let scrollX = new Animated.Value(0)

  const deviceWidth = Dimensions.get('window').width

  const translateX = scrollX.interpolate(
    {
      inputRange: [0, deviceWidth],
      outputRange: [0, 20]
    }
  )

  const createSquare = (...params) => (<Square
    color={params[0]}
    alpha={params[1]}
    rotate={params[2]}
    scale={params[3]}
    top={params[4]}
    right={params[5]}
    bottom={params[6]}
    left={params[7]}
    radius={params[8]}
  />)


  const informations = [
    {
      title: 'Maiores rentabilidades',
      description: 'Total transparencia nas informações',
      id: 0
    },
    {
      title: 'Uma nova classe de investimento',
      description: 'Existe uma maneira melhor de investir, descubra conosco.',
      id: 1
    },
    {
      title: 'Uma ideia',
      description: 'Juntos vamos reinventar o sistema bancário ultrapassado e garantir um melhor negócio para todos.',
      id: 2
    }
  ] 

  const createInformationsView = ({ title, description }) => (

    <Container>
      
      <Title>{ title }</Title>
      <Text>{ description }</Text>
    
    </Container>

  )

  return ( 
    <BackgroundGradiant 

      start={{x: 1, y: 0.5}}
      end={{x: 0, y: 0.2}}
      colors={[dusk, darkDusk]}

    >

    {createSquare( twilight, 1, '45deg', 0.2, 'auto', '-20px', '10px', 'auto', '60px' )}
    {createSquare( twilight, 0.3, '45deg', 0.3, 'auto', '-20px', '-50px', 'auto', '40px' )}
    {createSquare( twilight, 0.3, '45deg', 0.2, '60%', 'auto', 'auto', '-80px', '58px' )}
    {createSquare( twilight, 0.5, '45deg', 0.55, '40%', '-120px', 'auto', 'auto', '20px' )}
    {createSquare( twilight, 1,'45deg', 0.4, '90px', '0', '0', '-85px', '30px', )}
    {createSquare( twilight, 0.55, '45deg', 1.05, '-60px', '0', '0', '-10px', '12px' )}

    <FlatList
        horizontal
        data={informations}
        renderItem={({ item }) => createInformationsView(item)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={ 
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            
            ],
            {useNativeDriver: true}
          ) 
        }
      />

      <PageIndicator>

        <Dots 
          background={ white } 
          position="absolute"
          style={{ transform: [{translateX}] }}
          
        />

        <Dots />

        <Dots />

        <Dots />


      </PageIndicator>

      <Logo fill={ white } width={120} height={120} />

      <Buttons>
        
        <Buttom title={'entrar'} onPress={ () => navigation.navigate('Login') } />
        <Buttom title={'criar uma conta'} background={'transparent'} />

      </Buttons>

    </BackgroundGradiant>
  )
}


