import * as React from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {appStyles} from '../../config';
import Blocks from './Blocks';
import {useCallback, useRef} from 'react';
import Dots from './Dots';
import {Button, Text} from '../../components';
import FrameOne from '../../assets/svg/Frame-626164.svg';
import FrameTwo from '../../assets/svg/Frame-626166.svg';
import FrameThree from '../../assets/svg/Frame-626161.svg';
import FrameFour from '../../assets/svg/Frame-625813.svg';
import FrameFive from '../../assets/svg/Frame-1000001908.svg';
import FrameSix from '../../assets/svg/Frame-1000001909.svg';
import FrameSeven from '../../assets/svg/Frame-10000019012.svg';
import FrameEight from '../../assets/svg/Frame-1000001901.svg';
import ArrowRight from '../../assets/svg/arrow-right.svg';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {goBack, navigate} from '../../navigation/rootNavigation';
import {Toolbar} from '../../components/Toolbar';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import Question from '../../assets/svg/Question.svg';
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import {grayscale} from 'victory-core/src/victory-theme/grayscale';
import Container from '../../components/Container/Container';

type Props = {
  children?: any;
};

const Overview = ({children}: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const openApp = useCallback(() => {
    navigate('App', {screen: 'Portfolio'});
  }, [navigate]);

  const data = [
    {amount: '$4,500.00'},
    {amount: '$4,00.00'},
    {amount: '$4,300.00'},
  ];
  const cols = [
    {
      title: 'Portfolio',
      type: 'Aggressive',
    },
    {
      title: 'Round-Up Settings',
      type: 'Automatic',
    },
    {
      title: 'Recurring',
      type: '$20/Monthly',
    },
    {
      title: 'Beneficiary',
      type: '1 Child',
    },
    {
      title: 'One-time Investment',
      type: '',
    },
  ];

  const trans = [
    {
      title: 'One Time Investment',
      sub: 'Processing',
      amount: '$20',
    },
    {
      title: 'One Time Investment',
      sub: 'Processing',
      amount: '$20',
    },
    {
      title: 'One Time Investment',
      sub: 'Processing',
      amount: '$20',
    },
  ];

  const data2012 = [
    {quarter: 1, earnings: 130},
    {quarter: 2, earnings: 160},
    {quarter: 3, earnings: 190},
    {quarter: 4, earnings: 220},
    {quarter: 5, earnings: 260},
    {quarter: 6, earnings: 280},
    {quarter: 7, earnings: 320},
    {quarter: 8, earnings: 350},
    {quarter: 9, earnings: 380},
    {quarter: 10, earnings: 400},
    {quarter: 11, earnings: 400},
  ];

  const data2013 = [
    {quarter: 1, earnings: 100},
    {quarter: 2, earnings: 130},
    {quarter: 3, earnings: 160},
    {quarter: 4, earnings: 200},
    {quarter: 5, earnings: 240},
    {quarter: 6, earnings: 260},
    {quarter: 7, earnings: 260},
    {quarter: 8, earnings: 320},
    {quarter: 9, earnings: 350},
    {quarter: 10, earnings: 380},
    {quarter: 11, earnings: 400},
  ];

  const barRatio = 0.8;

  return (
    <View
      style={{
        ...appStyles.viewPort,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        //flex: 1
      }}>
      <Container>
        <ScrollView>
          <Toolbar leftIcon={<ArrowLeft />} />

          <View style={styles.mainHolder}>
            <Text style={styles.title}>Family Plus Investments</Text>
          </View>
          <View>
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
              {data.map(item => (
                <Blocks amount={item.amount} key={uuidv4()} />
              ))}
            </ScrollView>
            <Dots scrollX={scrollX} />
          </View>

          <View style={styles.holder}>
            <View style={styles.col}>
              <View style={styles.center}>
                <FrameOne style={styles.frame} />
                <Text style={styles.sub_title}>FamilyPlus Savings</Text>
              </View>
              <View style={styles.center}>
                <FrameTwo style={styles.frame} />
                <Text style={styles.sub_title}>Invest in Stocks</Text>
              </View>
              <View style={styles.center}>
                <FrameThree style={styles.frame} />
                <Text style={styles.sub_title}>Early for kids</Text>
              </View>
            </View>

            <View style={styles.container}>
              {cols.map(col => (
                <TouchableOpacity key={uuidv4()} onPress={() => openApp()}>
                  <View style={styles.item}>
                    <Text style={styles.item_title}>{col.title}</Text>
                    <View style={styles.row}>
                      <Text style={styles.item_title_sub}>{col.type}</Text>
                      <ArrowRight />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{backgroundColor: '#FDFDFD'}}>
              <View style={styles.header}>
                <Text bold={true} style={styles.header_title}>
                  Recent Transactions
                </Text>
              </View>

              {trans.map(tran => (
                <View key={uuidv4()} style={{...styles.row, ...styles.spacer}}>
                  <View style={styles.row}>
                    <FrameFour style={{marginRight: 12}} />
                    <View>
                      <Text style={styles.title_header}>{tran.title}</Text>
                      <Text style={styles.title_mini}>{tran.sub}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{tran.amount}</Text>
                  </View>
                </View>
              ))}

              <Button title={'View all'} btn_style={{margin: 0}} />
            </View>

            <View style={styles.g_holder}>
              <View>
                <Text style={styles.g_header}>
                  Hypothetical projection of <Text bold={true}>$12000</Text> at{' '}
                  <Text>age 16</Text>
                </Text>

                <View
                  style={{
                    ...styles.row,
                    justifyContent: 'space-between',
                    marginTop: 32,
                  }}>
                  <Text>Investment: $550</Text>
                  <Text>Returns: $12,000</Text>
                </View>

                <View>
                  <VictoryChart
                    width={333}
                    theme={VictoryTheme.grayscale}
                    domainPadding={{x: 5}}>
                    <VictoryAxis
                      style={{
                        axis: {stroke: 'transparent'},
                        ticks: {stroke: 'transparent'},
                        tickLabels: {fill: 'transparent'},
                      }}
                    />
                    <VictoryStack
                      style={{
                        data: {fill: '#EDD9FC'},
                      }}>
                      <VictoryBar
                        cornerRadius={{topLeft: 8, topRight: 8}}
                        style={{data: {fill: '#7F18D0'}}}
                        data={data2012}
                        barRatio={barRatio}
                        alignment="middle"
                        x="quarter"
                        y="earnings"
                      />
                      <VictoryBar
                        cornerRadius={{topLeft: 8, topRight: 8}}
                        style={{data: {fill: '#EDD9FC'}}}
                        data={data2013}
                        barRatio={barRatio}
                        alignment="middle"
                        x="quarter"
                        y="earnings"
                      />
                    </VictoryStack>
                  </VictoryChart>
                </View>
              </View>
            </View>

            <View style={{backgroundColor: '#FBFAFA', marginTop: 48}}>
              <View style={{...styles.header, marginTop: 2}}>
                <Text bold={true} style={styles.header_title}>
                  Grow your Knowledge
                </Text>
              </View>

              <View>
                <View style={{...styles.row, ...styles.row_padding}}>
                  <FrameFive style={{marginRight: 12}} />
                  <Text style={{fontSize: 16}}>What is Family Plus?</Text>
                </View>
                <View style={{...styles.row, ...styles.row_padding}}>
                  <FrameSix style={{marginRight: 12}} />
                  <Text style={{fontSize: 16}}>How do Round-Ups work?</Text>
                </View>
                <View style={{...styles.row, ...styles.row_padding}}>
                  <FrameSeven style={{marginRight: 12}} />
                  <Text style={{fontSize: 16}}>
                    What is FamilyPlus Savings?
                  </Text>
                </View>
                <View style={{...styles.row, ...styles.row_padding}}>
                  <FrameEight style={{marginRight: 12}} />
                  <Text style={{fontSize: 16}}>
                    How can I withdraw my money?
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 0,
  },
  spacer: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
  title_header: {
    fontSize: 16,
  },
  title_mini: {
    fontSize: 14,
  },
  mainHolder: {
    marginTop: 0,
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  holder: {
    padding: 22,
  },
  title: {
    fontSize: 20,
    color: '#4B4B4B',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  sub_title: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  col: {
    // flex: 'row',
    // flexDirection: 'row',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
  frame: {
    marginBottom: 9,
  },
  container: {
    marginTop: 36,
  },
  item: {
    backgroundColor: '#F4F4F4',
    borderRadius: 6,
    padding: 18,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  item_title: {
    color: '#4B4B4B',
    fontSize: 14,
  },
  item_title_sub: {
    color: '#7F18D0',
    fontSize: 14,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  header: {
    marginTop: 22,
    backgroundColor: '#FBFAFA',
    padding: 16,
  },
  header_title: {
    fontSize: 16,
  },
  row_padding: {
    // padding: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  g_holder: {
    marginTop: 47,
    backgroundColor: '#EDEEF7',
    padding: 18,
    borderRadius: 1,
  },
  g_header: {
    fontSize: 18,
    color: '#4B4B4B',
    paddingVertical: 8,
    paddingHorizontal: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Overview;
