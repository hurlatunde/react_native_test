import * as React from 'react';
import {Text as T} from 'react-native';
import appConfig from '../../config';

type Props = {
  children?: any;
  p?: any;
  s?: any;
  bold?: Boolean;
  style?: any;
};

const Text = ({children, p, s, bold, style}: Props) => {
  const fontFamily = {fontFamily: appConfig.fontFamily};
  return (
    <T
      style={[
        fontFamily,
        p && {fontSize: appConfig.fontSize},
        s && {fontSize: appConfig.fontSizeSmall},
        bold && {fontFamily: appConfig.fontFamilyBold},
        style,
      ]}>
      {children}
    </T>
  );
};

export default Text;
