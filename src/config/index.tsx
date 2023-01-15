import constants from './constants';
import {Platform} from 'react-native';

export {default as appStyles} from './styles';

export const appConfig = {
  name: '#KLE',
  displayName: '3kle',
  fontFamilyLight: constants.fontFamily,
  fontFamily: constants.fontFamily,
  fontFamilyBold: constants.fontFamilyBold,
  fontFamilyLightBold: constants.fontFamilyBold,
  platformOs: Platform.OS,
  fontSize: 14,
  fontSizeSmall: 12,
};

export default appConfig;
