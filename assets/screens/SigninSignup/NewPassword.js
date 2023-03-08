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
import {styles} from '../../styles/loginSignupStyle/NewPassStyle';
import {globalStyle} from '../../styles';
import {constants} from '../../utilities/Constant';
import Buttons from '../../components/Buttons';
import SignInbottom from '../../components/SignInbottom';
import IconsBottom from '../../components/IconsBottom';

const NewPassword = () => {
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
          <Text style={[constants.h2, styles.heading]}>
            Create new password
          </Text>
          <Text style={styles.textsty}>Enter a new password to continue.</Text>
        </View>
        <View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputfiel}
              placeholder="New Password"
              onChangeText={newText => setText(newText)}
            />
            <TextInput
              style={styles.inputfiel}
              placeholder="Confirm Password"
              onChangeText={newText => setText(newText)}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={[styles.buttonsty, constants.mt2]}>
        <Buttons bg="#027F3D" title="Create Password" color="#fff" />
      </View>
    </ScrollView>
  );
};
export default NewPassword;
