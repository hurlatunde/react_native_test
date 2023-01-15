import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import CoinsAmico from '../../assets/svg/coins-amico.svg';
import {Text} from '../../components';
import {SCREEN_WIDTH} from '../../config/dimensions';

type Props = {
  title: string;
  des: string;
};

const Page = ({title, des}: Props) => {
  return (
    <View style={styles.page}>
      <CoinsAmico width={238} height={238} style={styles.image} />
      <View style={styles.content}>
        <Text bold={true} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.des}>{des}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    width: 320,
    color: '#080D45',
    textAlign: 'center',
    lineHeight: 36,
    textAlignVertical: 'center',
  },
  des: {
    marginTop: 12,
    width: 260,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  image: {
    margin: 12,
  },
  content: {
    alignItems: 'center',
    alignContent: 'center',
  },
  page: {
    // flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
});

export default Page;
