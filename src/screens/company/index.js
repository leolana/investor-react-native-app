import React, { useState, useEffect } from 'react'


import {
    ScrollView,
    SafeAreaView
} from './styles'

import {
    Loading
} from '../../components'


import {
    Header,
    Body,
    Footer,
    Toolbar
} from './components'

import {
    Animated,
    Dimensions
} from 'react-native'

import {
    Request,
    UrlSolicitacaoPegar
} from '../../services'

const { height } = Dimensions.get('screen')

export const CompanyPage = props => {

    // States

    const [ scrollY ] = useState( new Animated.Value(0) )
    const [ solData, setSolData ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    // Vars

    const data = props.navigation.getParam('data', null)

    const AnimatedStyle = {
        height:  scrollY.interpolate({
            inputRange: [0, height],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        }) 
    } 
    


    // Methods

    const getSolicitation = async () => {

        const resp = await Request.GET({ url: UrlSolicitacaoPegar(data._id) })

        if(resp.status === 200) {
            setSolData(resp.data)
            setLoading(false)
        }


    }

    const onScroll = Animated.event( [ { nativeEvent: { contentOffset: { y: scrollY } } } ] )


    // Effects

    useEffect( () => {

        async function fetchData() {
            await getSolicitation()
        }

        fetchData()


    }, []) 

    // Render


    return (

        <Loading loading={loading} >
            <SafeAreaView>

                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={onScroll}
                >

                    <Header data={solData} />

                    <Body data={solData} />

                    <Footer data={solData} />

                </ScrollView>
                
            </SafeAreaView>

            <Animated.View style={ AnimatedStyle } >
                <Toolbar data={solData} /> 
            </Animated.View>
            
        </Loading>

    )
}


export const Company = {
    screen: CompanyPage,
    navigationOptions: {
        headerTitle: "ID #00000"
    }
}