import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

// Screens
import { Login } from '../screens/Login/index';
import { Home } from '../screens/Home/index';

const { Screen, Navigator, Group } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Navigator  initialRouteName="Login"  screenOptions={ {headerShown: false}}>
            <Screen
                name='Login'
                component={Login}
            />

            <Screen
                name='Home'
                component={Home}
            />
        </Navigator>
    )
}