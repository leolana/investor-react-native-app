import styled from 'styled-components/native'

import { tealish, white } from '../../assets/colors.js';

export const TouchableOpacity = styled.TouchableOpacity`
    align-self: stretch;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 40px;
    background-color: ${tealish};

`

export const Text = styled.Text`
    font-size: 18px;
    color: ${white};
    font-weight: bold;
    letter-spacing: .5;

`



// export default StyleSheet.create({

//     container: {
//         alignSelf: 'stretch',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 5,
//         minWidth: 100,
//         height: w_height * 0.05,
//         backgroundColor: tealish
//     },

//     text: {
//         fontSize: 18,
//         color: white,
//         fontWeight: 'bold',
//         letterSpacing: 0.5,
//     }

    




// });
