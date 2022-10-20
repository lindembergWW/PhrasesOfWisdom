import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackRoutes } from './stack.routes';

export  function Routes() {
    return(
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
    )
}