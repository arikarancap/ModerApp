import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import {
    HomeHeader,
    FocusedStatusBar,
    NFTCard,
} from '../../components';
// import { NFTData } from "../constants/dummy";
import { assets, COLORS, SHADOWS, SIZES, FONTS, NFTData } from "../constants";

export function Home() {
    const [nftData, setNftData] = useState(NFTData);
    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData)
        const filtereddata = NFTData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filtereddata.length) {
            setNftData(filtereddata)
        }
        else {
            setNftData(NFTData)
        }
    }


    return (
        <SafeAreaView style={Styles.body}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <View style={{ zIndex: 0 }}>
                    {/* <Text style={Styles.text}>Hello World</Text> */}
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1
                }}>

                </View>
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />


                <View style={{ flex: 1, backgroundColor: COLORS.white }} />


            </View>
        </SafeAreaView>

    )
}

const Styles = StyleSheet.create({
    body: {
        // color: 'green',
        flex: 1,
        // backgroundColor: '#8A8A8A',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontFamily: 'Lobster-Regular',
        color: 'green',
    }

}

)

