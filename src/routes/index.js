

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/login/index';


export default createAppContainer(
    createSwitchNavigator(
        {
          Login
        },
    )
);