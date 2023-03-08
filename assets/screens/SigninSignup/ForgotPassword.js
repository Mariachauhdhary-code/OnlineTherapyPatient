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
import {styles} from '../../styles/loginSignupStyle/ForgotPassStyle';
import {globalStyle} from '../../styles';
import {constants} from '../../utilities/Constant';
import Buttons from '../../components/Buttons';
import SignInbottom from '../../components/SignInbottom';
import IconsBottom from '../../components/IconsBottom';

const ForgotPassword = () => {
return (
    <ScrollView>
      <ImageBackground
        style={[
          constants.center,
          {
            height: constants.height * 0.43,
            resizeMode: 'cover',
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
          <Text style={[constants.h2, styles.heading]}>Forgot Password?</Text>
          <Text style={styles.textsty}> Please enter the email address linked with your account.</Text>

        </View>
        <View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputfiel}
              placeholder="Enter your email"
              onChangeText={newText => setText(newText)}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.buttonsty}>
        <Buttons bg="#027F3D" title="Send Code" color="#fff" />
      </View>
      <View>
        <SignInbottom
          title="Remember Password?"
          title1=" Login"
          color="#1E232C"
          colorgr="#027F3D"
          textdeco="none"
        />
      </View>
    </ScrollView>
  );
};
export default ForgotPassword;
