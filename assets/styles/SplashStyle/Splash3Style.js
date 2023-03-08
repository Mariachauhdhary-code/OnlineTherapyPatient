import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../../utilities/Constant';

export const styles = StyleSheet.create({
  bg3: {
    backgroundColor: '#017136',
  },
  imageBg3: {
    position: 'relative',
    resizeMode: 'stretch',
    height: Dimensions.get('screen').height * 0.95,
  },
  maindiv3: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('screen').height * 0.07,
  },

  txt: {
    alignSelf: 'center',
    marginVertical: 4,
  },

  maindiv4: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('screen').height * 0.55,
  },
});
