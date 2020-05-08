import React, { useEffect, useState } from 'react'

import { TouchableOpacity } from 'react-native'

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

import {
    Request,
    UrlContaPegar
} from '../../services'


export const ProfileComponent = props => {

    const getAccountData = async () => {

        const resp = await Request.GET({ url: UrlContaPegar, header: 'bearer' })

        const { data } = resp


        console.log("DATAAAAAAaa",  data)
        
        atualiza(data)
    }


    // props

    const { navigation } = props

    // states

    const [name, setName] = useState('')
    const [nameLetter, setNameLetter] = useState('')
    const [email, setEmail] = useState('')

    const [accountData, setAccountData] = useState(undefined)


    // vars


    const dispatch = useDispatch()

    const links = [
        {
            title: 'Alterar senha',
            onPress: () => navigation.navigate('ChangePassword')
        },
        {
            title: 'Informações pessoais',
            onPress: () => { }
        },
        {
            title: 'Configurações',
            onPress: () => navigation.navigate('Configurations')
        },
        {
            title: 'Documentos',
            onPress: () => navigation.navigate('Documents')
        },
        {
            title: 'Formalizações',
            onPress: () => navigation.navigate('CCBsList')
        },
        {
            title: 'Suitability',
            onPress: () => navigation.navigate('SuitabilityWelcome')
        },
        {
            title: 'Cadastro',
            onPress: () => navigation.navigate('SignUpInvestorStepWelcome')

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
    // effects

    useEffect( () => {
       
        
            getAccountData()
            

        
    }, [])

    const atualiza = (accountData) => {
        if (accountData === undefined || accountData === null) return

        if (accountData.Nome !== undefined) {
            setName(accountData.Nome || '')
            setNameLetter(accountData.Nome[0] || '')
        }

        if (accountData.Email !== undefined) setEmail(accountData.Email || '')

    }


    // render

    return (
        <SafeAreaView>

            <ScrollView>

                <Header>
                    <Background colors={[tealish, greenishBlue]} />


                    <CircleShadow>
                        <Circle
                            size={158}
                            borderSize={5}
                            borderColor={white}
                            background={[greenishBlue, darkDusk]}
                        >
                            <Letter>{nameLetter}</Letter>
                        </Circle>
                    </CircleShadow>

                </Header>
<TouchableOpacity onPress={getAccountData}><Name>TECLE</Name></TouchableOpacity>

                <Name> {name} </Name>

                <Email> {email} </Email>

                <ListArea>

                    <LinkList data={links} />

                </ListArea>



            </ScrollView>

        </SafeAreaView>

    )


}

export const Profile = {
    screen: ProfileComponent,
    navigationOptions: {
        headerTitle: "Perfil",
        headerLeft: null
    }
}