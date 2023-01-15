import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../components';
import ArrowRight from '../../assets/svg/arrow-right.svg';
import PieChart from 'react-native-pie-chart';
import {VictoryPie} from 'victory-native';
import {SCREEN_WIDTH} from '../../config/dimensions';

type Props = {
  title: string;
  percentage: string;
  pie_chart: Chart;
};

type Chart = {
  series: string;
  sliceColor: string;
};

export const ItemChart = ({item}) => {
  const widthAndHeight = 34;

  const {title, percentage, pie_chart}: Props = item;

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.item}>
       <View style={{
         justifyContent: 'center'}}>
         <Text style={styles.item_title}>{title}</Text>
       </View>
        <View style={styles.row}>
          <View style={styles.victoryPieHolder}>
            <View style={{position: 'relative'}}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={pie_chart.series}
                sliceColor={pie_chart.sliceColor}
                // doughnut={true}
                // coverRadius={0.89}
                coverFill={'#FFF'}
              />
              <View
                style={{
                  justifyContent: 'center',
                  position: 'absolute',
                  alignItems: 'center',
                  alignContent: 'center',
                  width: 22,
                  height: 22,
                  backgroundColor: '#FFF',
                  display: 'flex',
                  flex: 1,
                  borderRadius: 50,
                  margin: 6,
                }}>
                <Text
                  bold={true}
                  style={{fontSize: 8, color: '#243B80'}}>
                  {percentage}
                </Text>
              </View>
            </View>
          </View>
          <ArrowRight />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  holder: {
    padding: 22,
  },
  victoryPieHolder: {
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    color: '#080D45',
    marginTop: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  pieChartHolder: {
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 80,
  },
  item: {
    backgroundColor: '#F4F4F4',
    borderRadius: 6,
    padding: 18,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // width: SCREEN_WIDTH,
    justifyContent: 'space-between',
  },
  item_title: {
    color: '#080D45',
    fontSize: 14,
  },
  item_title_sub: {
    color: '#7F18D0',
    fontSize: 14,
    marginRight: 8,
  },
  pie_chart: {
    width: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});
