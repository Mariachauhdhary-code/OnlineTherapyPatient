import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {styles} from '../../styles/loginSignupStyle/RegisterStyle';
import {globalStyle} from '../../styles';
import {constants} from '../../utilities/Constant';
import Buttons from '../../components/Buttons';
import SignInbottom from '../../components/SignInbottom';
import IconsBottom from '../../components/IconsBottom';

const Register = () => {
  // const [isChecked, setChecked] = useState(false);


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
          <Text style={[constants.h2, styles.heading]}>Hello! Register to Get Started</Text>
        </View>
        <View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputfiel}
              placeholder="Email"
              onChangeText={newText => setText(newText)}
            />
            <TextInput
              style={styles.inputfiel}
              placeholder="Username"
              onChangeText={newText => setText(newText)}
            />
            <TextInput
              style={styles.inputfiel}
              placeholder="Password"
              onChangeText={newText => setText(newText)}
            />
            <Image
              style={styles.imgeye1}
              source={require('../../images/eye.png')}
            />
            <TextInput
              style={styles.inputfiel}
              placeholder="Confirm password"
              onChangeText={newText => setText(newText)}
            />
            <Image
              style={styles.imgeye2}
              source={require('../../images/eye.png')}
            />
          </View>

        </View>
      </ImageBackground>
      <View style={styles.regbutton}>
        <Buttons bg="#008CC7" title="Register" color="#fff" />
      </View>
      <View>
        <IconsBottom logintext="Or Login with" />
      </View>
      <View style={styles.authnote}>
        <SignInbottom
          title="Already have an account?"
          title1=" Login Now"
          color="#1E232C"
          colorgr="#027F3D"
          textdeco="none"
        />
      </View>
    </ScrollView>
  );
};
export default Register;
