import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable, Modal
} from 'react-native';
import {Button, Text} from '../../components';
import {appStyles} from '../../config';
import PieChart from 'react-native-pie-chart';
import {v4 as uuidv4} from 'uuid';
import {ItemChart} from './ItemChart';
import {VictoryPie} from 'victory-native';
import {SCREEN_WIDTH} from '../../config/dimensions';
import {Toolbar} from '../../components/Toolbar';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import Question from '../../assets/svg/Question.svg';

import {useCallback, useState} from 'react';
import {goBack, navigate, replace} from '../../navigation/rootNavigation';

type Props = {};

const PortfolioScreen = ({}: Props) => {
  const widthAndHeight = 280;
  const [modalVisible, setModalVisible] = useState(false);

  const series = [123, 789, 123, 321];
  const sliceColor = ['#7982FA', '#1826D0', '#C2C7FF', '#EEEFFF'];

  const cols = [
    {
      title: 'Large Company Stocks(VOO)',
      percentage: '55%',
      pie_chart: {
        series: [123, 789],
        sliceColor: ['#EEEFFF', '#1826D0'],
      },
    },
    {
      title: 'Medium Company Stocks (IJH)',
      percentage: '10%',
      pie_chart: {
        series: [133, 589],
        sliceColor: ['#EEEFFF', '#1826D0'],
      },
    },
    {
      title: 'Small Company Stocks(IJR)',
      percentage: '5%',
      pie_chart: {
        series: [233, 459],
        sliceColor: ['#EEEFFF', '#1826D0'],
      },
    },
    {
      title: 'International Company Stocks (IXUS)',
      percentage: '30%',
      pie_chart: {
        series: [459, 233],
        sliceColor: ['#EEEFFF', '#1826D0'],
      },
    },
  ];

  return (
    <View
      style={{
        ...appStyles.viewPort,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        //flex: 1
      }}>
      <SafeAreaView>
        <ScrollView>
          <Toolbar
            leftIconPress={() => goBack()}
            leftIcon={<ArrowLeft />}
            rigthIcon={<Question />}
            rightIconPress={() => setModalVisible(true)}
          />
          <View style={styles.mainHolder}>
            <Text bold={true} style={styles.title}>
              Aggressive Portfolio
            </Text>
          </View>

          <View style={styles.pieChartHolder}>
            <VictoryPie
              style={{
                labels: {fill: '#080D45', fontSize: 12},
              }}
              innerRadius={50}
              colorScale={sliceColor}
              width={widthAndHeight}
              height={widthAndHeight}
              data={[
                {x: 'International\nCompany Stocks', y: 35},
                {x: 'Medium Company\nStocks (IJH)', y: 40},
                {x: 'Small Company\nStocks (IJR)', y: 55},
                {x: 'Large Company\nStocks (VOO)', y: 55},
              ]}
            />
          </View>

          <View style={styles.holder}>
            <View>
              <View style={styles.mini_roll}>
                <Text bold={true}>Prospective Outcome</Text>
                <Text>Risk:6</Text>
                <Text>Returns 10-15%</Text>
              </View>
            </View>
            <View>
              {cols.map(col => (
                <ItemChart key={uuidv4()} item={col} />
              ))}
            </View>

            <View style={{marginTop: 22}}>
              <Button
                title_style={{color: '#4B4B4B'}}
                btn_style={{margin: 0, backgroundColor: '#C2C7FF'}}
                title={'This portfolio is selected'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Question clicked!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    padding: 22,
  },
  title: {
    fontSize: 24,
    color: '#080D45',
    marginTop: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mini_roll: {
    backgroundColor: '#F4F4F4',
    borderRadius: 6,
    padding: 18,
    marginBottom: 22,
  },
  pieChartHolder: {
    width: SCREEN_WIDTH,
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 40,
    flex: 1,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    // color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PortfolioScreen;
