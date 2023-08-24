import React from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Image, FlatList, StatusBar } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'
import {
    HomeHeader,
    FocusedStatusBar,
    NFTCard,
    CircleButton,
    RectButton,
    SubInfo,
    DetailsDesc,
    DetailsBid
} from '../../components';

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width: '100%',
                height: '100%',
            }}
        />
        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight - 5}
        />
        <CircleButton
            imgUrl={assets.heart}
            // handlePress={() => navigation.goBack()}
            right={15}
            top={StatusBar.currentHeight - 5}
        />
    </View>
)
export function Details({ route, navigation }) {
    // console.log(route);
    const { data } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="white"
                transLucent={true}
            />
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255,0.5)',
                zIndex: -100,

            }}>
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: SIZES.extraLarge * 3
                }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader
                            data={data}
                            navigation={navigation}
                        />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />
                            {data.bids.length > 0 && (
                                <Text style={{
                                    padding: SIZES.font,
                                    //  fontFamily: FONTS.semiBold,
                                    fontFamily: FONTS.curse,
                                    color: COLORS.primary,
                                }}>
                                    Current Bid
                                </Text>
                            )}
                        </View>
                    </React.Fragment>

                )}
            />
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    body: {
        color: 'green',
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center'
    },

}

)