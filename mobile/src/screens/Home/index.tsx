import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Background } from './../../components/Background/index';
import { StatusBar } from 'react-native';

import { styles } from './styles';
import { Logo } from '../../components/Logo';
import { PHRASES } from '../../utils/phrases';

export function Home() {
  let index = Math.floor(Math.random() * PHRASES.length + 1); 
  let phrase = PHRASES[index].frase;
  let author = PHRASES[index].autor;

  return (
    <Background>
        <StatusBar
         barStyle="light-content"
         backgroundColor="transparent"
         translucent
         /> 
    <View style={styles.container}>

      <Logo />
      <Text style={styles.textPhrase}> { phrase } </Text>
      <Text style={styles.textAuthor}> { author } </Text>

      <TouchableOpacity style={styles.btnPrimay}>
        <Text>💖</Text>
      </TouchableOpacity>

    </View>
    </Background>
  );
}

//marcoa@inovacaobrain.com.br
