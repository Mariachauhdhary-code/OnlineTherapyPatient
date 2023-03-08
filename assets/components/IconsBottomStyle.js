import {Dimensions, StyleSheet} from 'react-native';
import {constants} from '../utilities/Constant';
export const styles = StyleSheet.create({
  flexcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    top: Dimensions.get('screen').height * 0.03,
    marginHorizontal: 45,
    marginVertical: 3,
  },
  hr: {
    flex: 1,
    height: Dimensions.get('screen').height * 0.001,
    backgroundColor: '#787878',
  },
  LoginTxt: {
    width: Dimensions.get('screen').width * 0.25,
    textAlign: 'center',
    color: '#6A707C',
    fontWeight: '400',
    fontSize: 14,
  },
  // Iconswithboxes
  mainbox: {
    flexDirection: 'row',
    top: Dimensions.get('screen').height * 0.01,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxleft: {
    borderColor: '#787878',
    color: '#FFFFFF',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
  },
  boxright: {
    borderColor: '#787878',
    color: '#FFFFFF',
    marginHorizontal: 10,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
