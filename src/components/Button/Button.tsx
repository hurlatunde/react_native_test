import * as React from 'react';
import appConfig from '../../config';
import {Text} from '../Text';
import {TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  children?: any;
  title: string;
  btn_style?: any;
  title_style?: any;
  onPress?: any;
};

const Button = ({title, btn_style, title_style, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btn_style]}>
      <Text bold={true} style={[styles.title, title_style]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#7F18D0',
    borderRadius: 6,
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    margin: 18,
  },
  title: {
    padding: 15,
    color: '#FFFFFF',
    lineHeight: 20,
    fontSize: 16,
  },
});

export default Button;
