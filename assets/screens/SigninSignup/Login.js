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
import {styles} from '../../styles/loginSignupStyle/LoginStyle';
import {globalStyle} from '../../styles';
import {constants} from '../../utilities/Constant';
import Buttons from '../../components/Buttons';
import SignInbottom from '../../components/SignInbottom';
import IconsBottom from '../../components/IconsBottom';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const [showPass, setshowPass] = useState(true)
  function checkbox() {
    setChecked(!isChecked);
  }
  const checkShowPass = ()=>{
    if (showPass) {
      setshowPass(false)
    }else{
      setshowPass(true)
    }
  }

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
        <View style={styles.logomainbox}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../images/logoLogin.png')}
          />
          <Text style={[constants.h2, styles.heading]}>Let's Sign you In</Text>
          <Text style={styles.textstyle}>
            {' '}
            Welcome back you've been missed!!
          </Text>
        </View>
        <View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputfiel}
              placeholder="Enter your email"
            />
            <TextInput
              style={styles.inputfiel}
              placeholder="Enter your password"
              secureTextEntry = {showPass}
            />
            <TouchableOpacity onPress={checkShowPass} style={styles.imgeye}>
              <Image  
                source={require('../../images/eye.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.check}>
        <View>
          <BouncyCheckbox
            size={22}
            fillColor="#787878"
            unfillColor="#FFFFFF"
            text="Remember me"
            iconStyle={{
              borderColor: '#787878',
              borderRadius: 10,
              color: '#027F3D',
            }}
            innerIconStyle={{borderWidth: 2, borderRadius: 5}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              textDecorationLine: 'none',
            }}
            onPress={checkbox}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.checkforgot}> Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.regbutton}>
        <Buttons bg="#027F3D" title="Login" color="#fff" />
      </View>
      <View style={constants.mt0}>
        <IconsBottom logintext="Or Login with" />
      </View>
      <View>
        <SignInbottom

          title="Don't have account?"
          title1=" Register Now"
          color="#1E232C"
          colorgr="#027F3D"
          textdeco="none"
        />
      </View>
    </ScrollView>
  );
};
export default Login;
