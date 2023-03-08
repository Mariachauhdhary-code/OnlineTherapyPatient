import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {styles} from './SignInbottomSty';
import {globalStyle} from '../styles';
const SignInbottom = props => {
  return (
    <View>
      <View style={styles.margin}>
        <Text style={[styles.acc, {color: props.color}]}>
          {props.title}

        <TouchableOpacity>

            <Text
              style={[
                styles.Signup,
                {textDecorationLine: props.textdeco},
                {color: props.colorgr},
              ]}>
              {props.title1}
            </Text>
        </TouchableOpacity>

        </Text>
      </View>
    </View>
  );
};
export default SignInbottom;
