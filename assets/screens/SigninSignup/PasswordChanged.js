import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/loginSignupStyle/PasswordChangedStyle';
import {globalStyle} from '../../styles';
import {constants} from '../../utilities/Constant';
import Buttons from '../../components/Buttons';
import SignInbottom from '../../components/SignInbottom';
import IconsBottom from '../../components/IconsBottom';

const PasswordChanged = () => {
  return (
    <ScrollView>
      <View style={styles.imgtop}>
        <ImageBackground
          style={[
            constants.center,
            styles.imgtop,
            {
              height: constants.height * 0.79,
              resizeMode: 'stretch',
              width: constants.width,
            },
          ]}
          source={require('../../images/logbg.png')}>
          <TouchableOpacity>
          <Image
            style={styles.backicon}
            source={require('../../images/back.png')}
          />
          </TouchableOpacity>
          <View style={styles.logomainbox}>
            <Image
              source={require('../../images/Success.png')}
            />
            <Text style={[constants.h2, styles.heading]}>
              Password Changed!
            </Text>
            <Text style={styles.textsty}>
              Your password has been changed successfully.
            </Text>
            <View style={styles.buttonsty}>
              <Buttons bg="#008CC7" title="Back to login" color="#fff" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default PasswordChanged;
