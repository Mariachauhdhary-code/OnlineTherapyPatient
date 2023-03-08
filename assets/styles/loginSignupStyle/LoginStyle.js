import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';
export const styles = StyleSheet.create({
  inputbox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: Dimensions.get('screen').height * 0.015
  },
  inputfiel: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: constants.width * 0.88,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#787878',
    marginVertical: 5,
    paddingLeft: 30,
  },

  heading: {
    color: '#1E232C',
    marginTop: 10,
  },
  logomainbox: {
    marginTop: 120,
  },
  imgeye: {
    position: 'absolute',
    top: 85,
    right: 0,
    marginRight: 15,
  },
  textstyle: {
    fontWeight: '700',
    fontSize:14,
    fontFamily:  constants.ProductSansBold,
  },
  check: {
    marginTop: Dimensions.get('screen').height * 0.03,
    display: 'flex', 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  regbutton:{
    marginTop: 30,
  },
  checkforgot:{
    fontSize:14,
    fontWeight:'700',
  },

});
