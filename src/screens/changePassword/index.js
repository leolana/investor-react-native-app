import React from 'react'


import {
    SafeAreaView,
    TextInput,
    ButtomText
} from './styles'




export const ChangePasswordComponent = props => {



    return (
        <SafeAreaView>

            <TextInput title="Senha atual"/>

            <TextInput title="Nova senha"/>

            <TextInput title="Repetir senha"/>

            <Buttom>
                <ButtomText>ALTERAR SENHA</ButtomText>
            </Buttom>

        </SafeAreaView>
    )
}

export const ChangePassword = {
    screen: ChangePasswordComponent,
    navigationOptions: {
        headerTitle: "Mudar senha",
    }
}