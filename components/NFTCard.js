import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../comp/constants/theme';
import { CircleButton, RectButton } from './Button';
import { SubInfo, ETHPrice, NFTTitle, ImgCmp, People, EndDate } from './SubInfo';
export function NFTCard({ data }) {
    const navigation = useNavigation();

    return (
        <View style={Styles.body}>
            {/* <Text style={Styles.text}>Hello World From NFTCard</Text> */}
            <View style={{ width: '100%', height: 250 }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
                {/* <Text style={{color:'white'}}>{data.name}</Text> */}
            </View>
            <View style={{ width: "100%", padding: SIZES.font }}>
                <SubInfo />
            </View>
            <View style={{ width: '100%', padding: SIZES.font }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.font}
                />
                <ETHPrice />
            </View>
            <View style={{
                marginTop: SIZES.font,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <ETHPrice
                    price={data.price}
                />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}
                />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    body: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    text: {
        fontSize: 25,
        fontFamily: 'Lobster-Regular',
        color: 'green',
    }

}

)