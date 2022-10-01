//CRIAR PROJETO expo init name_app
//ABRIR PROJETO expo start

//expo install expo-font @expo-google-fonts/inter
//Instalar as fontes que iremos usar - https://docs.expo.dev/guides/using-custom-fonts/

//https://reactnavigation.org/docs/getting-started/
//Instalar as abas de navegação - expo install react-native-screens react-native-safe-area-context
import { StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoade] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
        <StatusBar
         barStyle="light-content"
         backgroundColor="transparent"
         translucent
         /> 
        {/* {fontsLoade ? <Login/> : <Loading/>} */}
        {fontsLoade ? <Home/> : <Loading/>}
    </Background>
  );

}

