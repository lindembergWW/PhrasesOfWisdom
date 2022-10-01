import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Logo } from '../../components/Logo';

export function Login() {
  return (
    <View style={styles.container}>
      <Logo/>        
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textButton}> Frase do dia </Text>
        </TouchableOpacity>        
    </View>
  );
}