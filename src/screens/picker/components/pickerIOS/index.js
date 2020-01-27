
import {
    Text,
    Button,
    PickerStyled
} from './styles'

import { withNavigation } from 'react-navigation'


export const PickerIOSComponent = props => {


    return (
        <>

            <Button onPress={ () => props.navigation.goBack() } >
                <Text>Pronto</Text>
            </Button>

            <PickerStyled
                selectedValue={props.value}
                onValueChange={props.onChange}
            
            >

                {
                    props.data.map( data => (<PickerStyled.Item label={data.text} value={data.value} />) )
                }
            </PickerStyled>


        </>

    )
}

export const PickerIOS = withNavigation(PickerIOSComponent)