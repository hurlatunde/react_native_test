import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";

type Props = {
    rightIconPress?: any,
    rigthIcon?: any,
    leftIcon?: any,
    style?: any,
};

 const Toolbar = ({leftIconPress, leftIcon, style, rigthIcon, rightIconPress}: Props) => {
    return (
        <View style={{padding: 32}}>
            <View style={styles.nav}>
                {leftIcon && <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={leftIconPress}
                        style={styles.centerBtn}>
                        {leftIcon}
                    </TouchableOpacity>
                </View>}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={rightIconPress}
                        style={styles.centerBtn}>
                        {rigthIcon}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    holder: {
        padding: 22,
    },
    centerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
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
});

export default Toolbar
