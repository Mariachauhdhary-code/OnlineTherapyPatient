import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';
export const styles = StyleSheet.create({
  inputbox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },

  heading: {
    color: '#1E232C',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginVertical: 10,
  },
  logomainbox: {
    marginTop: -10,
    marginVertical: 60,
    bottom: 20,
    alignItems:'center',
  },
  textsty: {
    width: constants.width * 0.7,
    textAlign: 'center',
    lineHeight: 25,
    color: '#676767',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 30,
  },
  buttonsty:{ 
    marginBottom:30,
  },
  imgtop:{
  marginTop: 25, 
 },
 backicon:{
    position:'absolute',
    width:constants.width*0.085,
    height:constants.height*0.04,
    bottom :130,
    right:140,
    borderColor: '#BABABA',
    borderRadius:50, 
    borderWidth: 1,
 }
});
