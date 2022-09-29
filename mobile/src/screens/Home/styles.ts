import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 64,
    paddingTop:64,   
  },
  logo:{
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop: 74,
    marginBottom:48,
  },
  textPhrase:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'center',
    paddingLeft: 32,
    paddingRight:32,
  },
  textAuthor:{
    width: '100%',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    textAlign: 'right',
    padding:32,
  },
  btnPrimay:{
    justifyContent: 'center',
    alignItems: 'center',

    width: 56,    
    height: 56,
    borderRadius: 56,
    borderWidth:1,
    alignSelf: 'flex-end',
    right: 32,
    
    backgroundColor: THEME.COLORS.OPACITY,
    borderColor: THEME.COLORS.BORDER,
  }
});