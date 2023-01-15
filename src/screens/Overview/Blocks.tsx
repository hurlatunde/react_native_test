import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Dashboard from '../../assets/svg/dasboard.svg';
import {SCREEN_WIDTH} from '../../config/dimensions';
import {Button, Text} from '../../components';

type Props = {
  amount: string;
};

const Blocks = ({amount}: Props) => {
  return (
    <View style={styles.page}>
      <View style={styles.rel}>
        <Dashboard width={326} height={173} style={styles.das} />
        <View style={styles.over}>
          <Text bold={true} style={styles.title}>
            {amount}
          </Text>
          <Text style={styles.sub}>Total Balance</Text>
          <View style={styles.row}>
            <Button
              title={'Add Money'}
              btn_style={{backgroundColor: '#FFFFFF'}}
              title_style={{color: '#4B4B4B', fontSize: 12, paddingVertical: 8}}
            />
            <Button
              title={'Withdraw'}
              btn_style={{backgroundColor: '#FFFFFF'}}
              title_style={{color: '#4B4B4B', fontSize: 12, paddingVertical: 8}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rel: {
    position: 'relative',
    // height: 180
  },
  das: {
    // height: 120
  },
  sub: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  over: {
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    top: 0,
    right: 0,
    left: 0,
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 43,
    marginTop: 32,
    textAlignVertical: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  // des: {
  //     marginTop: 12,
  //     width: 242,
  //     fontSize: 14,
  //     lineHeight: 21,
  //     textAlign: 'center',
  //     textAlignVertical: 'center',
  // },
  // image: {
  //     margin: 12,
  // },
  // content: {
  //     alignItems: 'center',
  //     alignContent: 'center',
  // },
  page: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    marginTop: 16,
    // padding: 16,
    // flex: 1
  },
});

export default Blocks;
