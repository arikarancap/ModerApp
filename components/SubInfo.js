import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../comp/constants'

export const NFTTitle = ({ title, titleSize, subTitle, subTitleSize }) => {
    return (
        <View>
            <Text style={{
                fontFamily: 'Lobster-Regular',
                // fontFamily: FONTS.semiBold,
                fontSize: titleSize,
                color: COLORS.primary
            }}>{title}</Text>
            <Text style={{
                fontFamily: 'Lobster-Regular',
                // fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary
            }}>{subTitle}</Text>
        </View>
    )
}

export const ETHPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image

                source={assets.eth}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 2 }}
            />
            <Text
                style={{
                    fontFamily: FONTS.curse,
                    fontSize: FONTS.font,
                    color: COLORS.primary,
                }}
            >{price}</Text>
        </View>
    )
}


export const ImgCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 40,
                height: 40,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: "row", }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImgCmp imgUrl={imgUrl} index={index} key={`people-${index}`} />
            ))

            }
        </View>
    )
}

export const EndDate = () => {
    let arr = new Array()
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.font,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'


        }}>
            <Text style={{
                // fontFamily: FONTS.regular,
                fontFamily: 'Lobster-Regular',
                fontSize: SIZES.small,
                color: COLORS.primary,
            }}>Ending In</Text>
            <Text style={{
                // fontFamily: 'Lobster-Regular',
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.primary,
            }}>12h 30m</Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: 'space-between'
        }}>
            <People />
            <EndDate />
        </View>
    )
}