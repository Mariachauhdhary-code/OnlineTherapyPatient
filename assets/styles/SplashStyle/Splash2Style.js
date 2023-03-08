import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';

export const styles = StyleSheet.create({
  bg2: {
    height: Dimensions.get('screen').height,
    backgroundColor: constants.green,
  },
  imageBg2: {
    position: 'relative',
    resizeMode: 'stretch',
    top: 0,
    height: Dimensions.get('screen').height * 0.55,
  },
  centerImage2: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: Dimensions.get('screen').height * 0.48,
  },

  maindiv: {
    backgroundColor: constants.white,
    height: Dimensions.get('screen').height * 0.39,
    borderRadius: 30,
  },

  headingg2: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
  },
  innerbox: {
    paddingVertical: 28,
    paddingHorizontal: 42,
  },
  para2: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
  },
  btnimg: {
    alignSelf: 'center',
    bottom: Dimensions.get('screen').height * 0.01,
    marginTop: 10,
  },
});
