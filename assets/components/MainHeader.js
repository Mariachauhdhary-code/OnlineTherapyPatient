import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import { constants } from '../utilities/Constant';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {fonts} from '../../fonts';

const mainHeader = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.press()}>
        <View style={[styles.backButton, {marginLeft: 20},props.style]}>
          {/* <AntDesign name="left" size={20} color="#000"  /> */}
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
      <View style={{marginRight: 20}}>
        {/* <AntDesign name="bells" size={25} color="#fff" /> */}
      </View>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    // paddingBottom: Dimensions.get('screen').height * 0.05,
    height: Platform.OS == "android"? Dimensions.get('screen').height * 0.13 : Dimensions.get('screen').height * 0.18,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    backgroundColor: '#000080',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  backButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: constants.ProductSansRegular,
   color: 'red',
  },
});
export default mainHeader;