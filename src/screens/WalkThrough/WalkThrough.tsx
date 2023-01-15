import React, {useCallback, useRef} from 'react';
import {Animated, ScrollView, View, StyleSheet} from 'react-native';
import {appStyles} from '../../config';
import Page from './Page';
import Dots from './Dots';
import {Button} from '../../components';
import {replace} from '../../navigation/rootNavigation';

function WalkThrough() {
  const scrollX = useRef(new Animated.Value(0)).current;

    const openApp = useCallback(() => {
      replace('App', {screen: 'Overview'});
    }, [replace]);

  const data = [
    {
      title: '3KLE invests your money intelligently in stocks',
      des: 'Build, preserve and manage your family wealth with stocks investment',
    },
    {
      title: '3KLE invests your money intelligently in stocks',
      des: 'Build, preserve and manage your family wealth with stocks investment',
    },
  ];

  return (
    <View style={{flexDirection: 'column'}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        contentContainerStyle={styles.contentContainerStyle}
        scrollEventThrottle={16}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {data.map((item, index) => {
          return <Page title={item.title} des={item.des} key={index} />;
        })}
      </ScrollView>
      <Dots scrollX={scrollX} />
      <Button title={'Get Started'} onPress={openApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    // flex: 1,
    // height: 320,
    marginTop: 84,
  },
});

export default WalkThrough;
