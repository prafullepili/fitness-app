import { View } from "react-native";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderImages } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function ImageSlider() {
    return <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        containerCustomStyle={{ color: 'black' }}
        contentContainerCustomStyle={{ color: 'black' }}
        hasParallaxImages={true}
        sliderWidth={widthPercentageToDP(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={widthPercentageToDP(100) - 70}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
}

const ItemCard = ({ item, index }, parallexProps) => {
    return (
        <View style={{ width: wp(100) - 70, height: hp(25) }}>
            <ParallaxImage
                source={item}
                containerStyle={{ borderRadius: 30, flex: 1 }}
                style={{ resizeMode: 'contain' }}
                parallaxFactor={1}
                {...parallexProps}
            />
        </View>
    )
}