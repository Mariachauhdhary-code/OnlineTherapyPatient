import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';
export const styles = StyleSheet.create({
  inputbox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
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
    top: 100,
  },
  heading: {
    color: '#1E232C',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginVertical: 10,
  },
  logomainbox: {
    top: 60,
  },
  textsty: {
    width: constants.width * 0.83,
    textAlign: 'center',
    lineHeight: 25,
    color: '#676767',
    fontSize: 16,
    fontWeight: '500',
  },
  backicon:{
    position:'absolute',
    width:constants.width*0.085,
    height:constants.height*0.04,
    bottom: 0,
    right:140,
    borderColor: '#BABABA',
    borderRadius:50, 
    borderWidth: 1,
 }

});
