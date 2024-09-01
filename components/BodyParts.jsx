import { View, Text, FlatList, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { bodyParts } from '../constants';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function BodyParts() {
    const router = useRouter();
    return (
        <View className="mx-4">
            <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                Exercises
            </Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={(props) => <BodyPartCard {...props} router={router} />}
            />
        </View>
    )
}

const BodyPartCard = ({ index, router, item }) => {
    return (
        <Animated.View
            key={index}
            entering={FadeInDown.duration(400).delay(index * 200).springify().damping(5)}
        // style={{ borderWidth: 1 }}
        >
            <Pressable
                onPress={() => router.push({ pathname: '/Exercises', params: item })}
                style={{ width: wp(45), height: wp(52) }}
                className="flex justify-end p-4 mb-4 "
                android_ripple={{ color: 'rgba(255,255,255,0.3  )', borderless: false, foreground: true }}
            >
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{ width: wp(45), height: wp(52) }}
                    className="rounded-[35px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-b-[35px]"
                />
                <Text style={{ fontSize: hp(2.3) }} className="text-white font-semibold text-center tracking-wide">
                    {item?.name}
                </Text>
            </Pressable>
        </Animated.View>
    )
}