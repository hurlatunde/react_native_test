import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    position: 'relative',
  },
  viewPortSafe: {
    flex: 1,
    backgroundColor: '#F1F2F3',
  },
  topSafeArea: {
    flex: 0,
  },
  holder: {
    padding: 32,
  },
  center: {
    alignItems: 'center',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnNext: {
    marginRight: 10,
    padding: 10,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerAb: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
