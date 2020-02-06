import React, { useEffect, useState } from 'react'

import {
    useSelector, 
    useDispatch
} from 'react-redux'

import {
    setAccountData
} from '../../store/actions'

import {
    tealish,
    white,
    greenishBlue,
    darkDusk,
    
} from '../../assets/colors'

import {
    LinkList,
} from '../../components'

import {
    ScrollView
} from 'react-native'

import {
    Background,
    Circle,
    SafeAreaView,
    Letter,
    Name,
    Header,
    CircleShadow,
    Email,
    ListArea,
    
} from './styles'

import {
    removeData
} from '../../utils'

export const PageProfile = props => {

    // props

    const { navigation } = props

    // states

    const [ name, setName ] = useState('')
    const [ nameLetter, setNameLetter ] = useState('')
    const [ email, setEmail ] = useState('')

    // vars

    const accountData = useSelector( ({accountData}) => accountData )

    const dispatch = useDispatch()

    const links = [
        {
            title: 'Alterar senha',
            onPrss: () => {}
        },
        {
            title: 'Informações pessoais',
            onPrss: () => {}
        },
        {
            title: 'Configurações',
            onPrss: () => {}
        },
        {
            title: 'Documentos',
            onPrss: () => {}
        },
        {
            title: 'Assinatura CCB’s',
            onPrss: () => {}
        },
        {
            title: 'Sair',
            onPress: async () => {

                await removeData('Authorization')

                navigation.navigate('Welcome')

                dispatch(setAccountData(null))

            }
        }
    ]

    // mehtods

    const renderLetter = () => (<Letter>{nameLetter}</Letter>)

    // effects

    useEffect( () => {

        if(accountData === undefined || accountData === null) return 

        setName(accountData.Nome)
        setNameLetter(accountData.Nome[0])
        setEmail(accountData.Email)

    }, [])


    // render

    return (
        <SafeAreaView>

            <ScrollView>

                <Header> 
                    <Background colors={[tealish, greenishBlue]} />

                    <CircleShadow>
                        <Circle
                            size={ 158 }
                            borderSize={ 5 }
                            borderColor={ white }
                            background={[greenishBlue, darkDusk]} 
                            child={renderLetter()}
                        />
                    </CircleShadow>
                    
                </Header>

                <Name> { name } </Name>

                <Email> { email } </Email>

                <ListArea>

                    <LinkList data={links}/>

                </ListArea>



            </ScrollView>
        
        </SafeAreaView>

    )


}

export const Profile = {
    screen: PageProfile,
    navigationOptions: {
        headerTitle: "PERFIL",
        headerLeft: null
    }
}