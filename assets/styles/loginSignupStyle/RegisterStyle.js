import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';
export const styles = StyleSheet.create({
  inputbox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    top: 20,
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
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: constants.width * 0.57,
  },
  logomainbox: {
    marginTop: 150,
  },
  regbutton: {
    marginTop: 100,
  },

  imgeye1:{
    position: 'absolute',
    top: 150,
    right: 20,
  },
  imgeye2:{
    position: 'absolute',
    top: 215,
    right: 20,
  },
  backicon:{
    position:'absolute',
    width:constants.width*0.085,
    height:constants.height*0.04,
    top: 110,
    right:140,
    borderColor: '#BABABA',
    borderRadius:50, 
    borderWidth: 1,
 },
 authnote:{
  marginTop:-20,
 }
});
