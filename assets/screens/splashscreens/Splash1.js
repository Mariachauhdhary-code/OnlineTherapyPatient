import { View, Text, Image } from 'react-native'
import React from 'react';
import {styles} from "../../styles/SplashStyle/Splash1Style";
import { globalStyle } from '../../styles';


const Splash1 = () => {
  return (
    <View style={styles.bg}>
    <Image style={styles.imageBg} source={require('../../images/handbg.png')} />
    <View>
    <Image style={styles.centerImage} source = {require('../../images/logo.png')} />
    <Text style={[globalStyle.font,styles.headingg]}>Online Therapy</Text>
    <Text style={[globalStyle.font,styles.para]}>Professionals</Text>
    </View>
    <Text style={[globalStyle.font,styles.subText]}>Powered by XYZ Company</Text>
    </View>
  )
}

export default Splash1