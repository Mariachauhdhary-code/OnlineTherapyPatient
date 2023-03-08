import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './IconsBottomStyle';
import {globalStyle} from '../styles';
const IconsBottom = props => {
  return (
    <View>
      <View style={styles.flexcenter}>
        <View style={styles.hr} />
        <View>
          <Text style={styles.LoginTxt}>{props.logintext}</Text>
        </View>
        <View style={styles.hr} />
      </View>
      {/*IconswithBoxes */}
      <View style={styles.mainbox}>
        <TouchableOpacity>
          <View style={styles.boxleft}>
            <Image
              style={styles.iconF}
              source={require('../images/facebook_ic.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.boxright}>
            <Image
              style={styles.iconG}
              source={require('../images/google_ic.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IconsBottom;
