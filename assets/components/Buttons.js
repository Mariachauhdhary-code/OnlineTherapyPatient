import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ButtonsStyle';
import {globalStyle} from '../styles';
const Buttons = props => {
  return (
    <View>
      <TouchableOpacity>
      <View style={[{backgroundColor: props.bg}, styles.mainbtnsbox]}>
        <View style={styles.but1}>
          <Text style={[{color: props.color}, styles.btntxt]}>
            {props.title}
            <Text style={[{color: props.color}, styles.btntxtbold]}>
              {props.title1}
            </Text>
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
