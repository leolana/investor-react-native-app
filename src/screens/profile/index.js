import React, { useEffect } from 'react'

import {
    useSelector
} from 'react-redux'

import {
    tealish,
    white,
    greenishBlue,
    darkDusk,
    
} from '../../assets/colors'

import {
    LinkList,
    BottomNavigator
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

export const PageProfile = () => {

    const userData = useSelector( ({userData}) => userData )

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
        }
    ]

    const renderLetter = () => (<Letter>{userData.Name[0]}</Letter>)


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

                <Name> { userData.Name } </Name>

                <Email> { userData.Email } </Email>

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