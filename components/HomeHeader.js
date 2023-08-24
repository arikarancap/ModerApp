import React from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../comp/constants'


export function HomeHeader({ onSearch }) {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{ width: 90, height: 25, }}
                />
                <View style={{ width: 45, height: 45, }}>
                    <Image
                        source={assets.person01}
                        resizeMode="contain"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode="contain"
                        style={{
                            position: 'absolute',
                            width: 15,
                            height: 15,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    marginVertical: SIZES.font,// borderWidth: 1,// borderColor: 'red'
                }}
            >
                <Text style={{
                    fontFamily: FONTS.curse,
                    // fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.white
                }}>
                    Hello, VICTORIA 🖐
                </Text>
                <Text style={{
                    fontFamily: FONTS.curse,
                    // fontFamily: FONTS.bold,
                    fontSize: SIZES.large,
                    color: COLORS.white,
                    marginTop: SIZES.base / 2,

                }}>

                    Let's Find a MasterPiece.
                </Text>

            </View>
            <View style={{ margintop: SIZES.font }}>
                <View
                    style={{
                        width: '100%',
                        borderRadius: SIZES.font,
                        backgroundColor: COLORS.gray,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.small - 5
                    }}
                >
                    <Image
                        source={assets.search}
                        resizeMode="contain"
                        style={{ width: 20, height: 20, marginRight: SIZES.base }}
                    />
                    <TextInput
                        placeholder="Search NFTs"
                        style={{ flex: 1 }}
                        onChangeText={onSearch}

                    />
                </View>
            </View>
        </View>
    )
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
        fontFamily: FONTS.curse,
        color: 'green',
    }

}

) 