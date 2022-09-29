import { View, Text, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/logo.png';

import { styles } from './styles';
import { THEME  } from '../../theme';

export function Home() {
  
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

        <Text style={styles.textPhrase}>Volta o cão arrependido, com suas orelhas tão fartas, com seu osso roído e com o rabo entre as patas.</Text>
        <Text style={styles.textAuthor}>Chaves</Text>
        
        <TouchableOpacity style={styles.btnPrimay}>
          <Text>💖</Text>
        </TouchableOpacity>
    </View>
  );
}