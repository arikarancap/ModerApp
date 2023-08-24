import { View, Text, Image } from 'react-native'
import React from 'react'
import { ETHPrice } from './SubInfo';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../comp/constants'

export const DetailsBid = ({ bid }) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: SIZES.base,
            paddingHorizontal: SIZES.base * 2,
        }}>
            <Image
                source={bid.image}
                resizeMode="contain"
                style={{ width: 48, height: 48 }}
            />
            <View>
                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.curse,
                    // fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                }}>Bid placed by{bid.name}</Text>
                <Text style={{
                    fontSize: SIZES.small - 2,
                    fontFamily: FONTS.curse,
                    // fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    marginTop: 3
                }}>Bid placed by {bid.date}</Text>
            </View>
            <ETHPrice price={bid.price} />
        </View>
    )
}