import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Background } from './../../components/Background/index';
import { StatusBar } from 'react-native';

import { styles } from './styles';
import { Logo } from '../../components/Logo';
import { phrases } from '../../utils/phrases';

export function Home() {

  const [index, setIndex] = useState<number>(Math.floor(Math.random() * phrases.length + 1));

  function changePhrases() {
    setIndex(Math.floor(Math.random() * phrases.length + 1))
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>

        <Logo />
        <Text style={styles.textPhrase}> {phrases[index].frase} </Text>
        <Text style={styles.textAuthor}> {phrases[index].autor} </Text>

        <TouchableOpacity style={styles.btnPrimay} onPress={changePhrases}>
          <Text>💖</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

//marcoa@inovacaobrain.com.br
