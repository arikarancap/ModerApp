import React from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export function FocusedStatusBar(props) {
    const IsFocused = useIsFocused();

    return IsFocused ? <StatusBar
        animated={true} {...props}
        // backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false} // it will be hidden
    /> : null;
}

const Styles = StyleSheet.create({
    body: {
        color: 'green',
        flex: 1,
        backgroundColor: '#8A8A8A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontFamily: 'Lobster-Regular',
        color: 'green',
    }

}

)