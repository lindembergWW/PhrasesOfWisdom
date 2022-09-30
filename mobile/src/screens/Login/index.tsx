import { View, Text, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/logo.png';

import { styles } from './styles';
import { THEME  } from '../../theme';

export function Login() {
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.logo} />

        
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textButton}> Frase do dia </Text>
        </TouchableOpacity>
        
    </View>
  );
}