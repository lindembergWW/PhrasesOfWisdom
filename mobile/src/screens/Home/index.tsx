import { View, Text } from 'react-native';

import { styles } from './styles';
import { THEME  } from '../../theme';

export function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.textPhrase}>Volta o cão arrependido, com suas orelhas tão fartas, com seu osso roído e com o rabo entre as patas.</Text>
        <Text style={styles.textAuthor}>Chaves</Text>
    </View>
  );
}