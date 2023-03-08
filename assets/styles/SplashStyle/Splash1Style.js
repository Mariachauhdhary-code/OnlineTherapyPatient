import {Dimensions, StyleSheet} from 'react-native';
import { constants } from '../../utilities/Constant';

export const styles = StyleSheet.create({
  bg: {
    height:Dimensions.get('screen').height ,
    backgroundColor: constants.green,
},
  imageBg: {
    position: 'relative',
    resizeMode: 'stretch',
    top: 10,
    height: Dimensions.get('screen').height * 0.8
  },
  centerImage:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: Dimensions.get('screen').height * 0.48 ,
    // resizeMode: 'center'
  },
  subText:{
    textAlign: 'center',
    color: constants.white,
    bottom: Dimensions.get('screen').height * 0.05,
    fontSize: 16,
    fontWeight: '400'
  },
  headingg:{
    bottom: Dimensions.get('screen').height * 0.38 ,
    textAlign: 'center',
    color: constants.white,
    fontSize: 40,
    fontWeight: '700'
  },
  para:{
    fontSize: 25,
    fontWeight: '400' ,
    textAlign: 'center',
    color: constants.white,
    bottom: Dimensions.get('screen').height * 0.38 ,

  }
});
