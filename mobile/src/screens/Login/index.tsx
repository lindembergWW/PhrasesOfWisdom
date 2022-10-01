import { View, Text, TouchableOpacity, Image } from 'react-native';
//import Logo from '../../assets/logo.png';

import { styles } from './styles';
import { THEME  } from '../../theme';
import { Logo } from '../../components/Logo';

export function Login() {
  return (
    <View style={styles.container}>

      {/* <Image source={Logo} style={styles.logo} /> */}
      <Logo/>

        
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textButton}> Frase do dia </Text>
        </TouchableOpacity>
        
    </View>
  );
}