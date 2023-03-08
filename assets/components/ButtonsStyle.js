import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../utilities/Constant';


export const styles = StyleSheet.create({
  
  mainbtnsbox: {
    alignSelf: 'center',
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.9,
    borderRadius: 50,
    marginVertical: 5,
  },
  but1: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.065,
    
  },
  btntxt: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: constants.ProductSansRegular,
    
  },
  btntxtbold: {
    fontSize: 19,
    fontWeight: '900',
    fontFamily: constants.ProductSansRegular,
    
  },
});
