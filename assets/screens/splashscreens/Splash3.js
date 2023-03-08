import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../styles/SplashStyle/Splash3Style';
import {globalStyle} from '../../styles';
import Buttons from '../../components/Buttons';
import { constants } from '../../utilities/Constant';
import SignInbottom from '../../components/SignInbottom';
const Splash3 = () => {
  return (
    <View style={styles.bg3}>
      <Image
        style={styles.imageBg3}
        source={require('../../images/shutr.png')}/>
      <View style={styles.maindiv3}>
        <Image style={styles.txt}source={require('../../images/shtrlogo.png')}/>
        <Image style={styles.txt} source={require('../../images/txt2.png')} />
        <Image style={styles.txt} source={require('../../images/txt1.png')} />
      </View>
      <View style={styles.maindiv4}>
        <Buttons bg = {constants.white} title = "Sign In" color = "black" />
        <Buttons bg = 'rgba(59,89,152,0.7)' title = "Sign In with" title1=" Facebook" color = "#fff"  />
        <Buttons bg = 'rgba(215,25,25,0.7)' title = "Sign In with" title1=" Gmail" color = "#fff"  />
        <View>
        <SignInbottom title = "Don't have account?" title1=" Sign Up" color = "#fff"/> 
        
      </View>
      </View>
    </View>
  );
};

export default Splash3;
