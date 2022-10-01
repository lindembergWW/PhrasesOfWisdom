import { View, Image } from 'react-native';
import { styles } from './styles';
import LogoImg from '../../assets/logo.png';

export function Logo() {
    return (
        <View style={styles.container}>

            <Image source={LogoImg} style={styles.logo} />

        </View>
    );
}