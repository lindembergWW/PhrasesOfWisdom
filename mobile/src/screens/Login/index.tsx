import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Logo } from '../../components/Logo';
import { PropsStackLogin } from '../../../types';
import { Background } from './../../components/Background/index';
import { StatusBar } from 'react-native';
export function Login( { route, navigation }: PropsStackLogin) {
  function openPhrase() {
     navigation.navigate('Home');
  }


  return (
    <Background>
        <StatusBar
         barStyle="light-content"
         backgroundColor="transparent"
         translucent
         /> 
    <View style={styles.container}>
      <Logo/>        
        <TouchableOpacity style={styles.btnLogin} onPress={openPhrase}>
          <Text style={styles.textButton}> Frase do dia </Text>
        </TouchableOpacity>        
    </View>
    </Background>
  );
}