import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../styles/SplashStyle/Splash2Style';
import {globalStyle} from '../../styles';


const Splash2 = () => {
  return (
    <View style={styles.bg2}>
      <Image style={styles.imageBg2} source={require('../../images/gr.png')} />
      <View>
      <View style={[styles.maindiv, styles.shadowProp]}>
        <View style={styles.innerbox}>
          <Text style={[globalStyle.font, styles.headingg2]}>
            Find The Best Online Therapists
          </Text>
          <Text style={[globalStyle.font, styles.para2]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <Image style={styles.btnimg} source = {require('../../images/btn.png')} />
        </View>
      </View>
    </View>
    </View>
  );
};

export default Splash2;
