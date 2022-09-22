//CRIAR PROJETO expo init name_app
//ABRIR PROJETO expo start

//expo install expo-font @expo-google-fonts/inter
//Instalar as fontes que iremos usar - https://docs.expo.dev/guides/using-custom-fonts/

//https://reactnavigation.org/docs/getting-started/
//Instalar as abas de navegação - expo install react-native-screens react-native-safe-area-context
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hoje é dia D !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
