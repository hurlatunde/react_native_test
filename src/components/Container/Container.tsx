import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';

type Props = {
    children: React.FC<PropsWithChildren>;
};

const Container = ({children}: Props) => {
    return <View>
        <SafeAreaView style={{
            flex: 0,
            backgroundColor: '#32014D',
        }}/>
        <SafeAreaView style={{flex: 0,backgroundColor: 'FFFFF'}}>
            {children}
        </SafeAreaView>
    </View>;
};

export default Container;
