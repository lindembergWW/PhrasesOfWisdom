import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginTop: 74,
    },
    btnLogin:{
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 150,
    
        width: '100%', 
        height: 56,
        borderRadius: 8,
        borderWidth:1,
                
        backgroundColor: THEME.COLORS.OPACITY,
        borderColor: THEME.COLORS.BORDER,
    },
    textButton:{
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    }

});