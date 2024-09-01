import { useRouter } from 'expo-router';
import { FlatList, Pressable } from 'react-native';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExercisesList({ data }) {
    const router = useRouter();
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <ExerciseCard item={item} index={index} router={router} />}
            />
        </View>
    )
}

const ExerciseCard = ({ item, router, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <Pressable
                onPress={() => router.push({ pathname: '/ExerciseDetails', params: item })}
                className="flex py-3 space-y-2"
            >
                <View className="bg-neutral-600 shadow rounded-[25px]">
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit='cover'
                        style={{ width: wp(44), height: wp(52), backgroundColor: 'white' }}
                        className="rounded-[25px]"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.2)']}
                        style={{ width: '100%', height: hp(10) }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0 rounded-b-[35px]"
                    />
                    <Animated.Text
                        style={{ fontSize: hp(1.7), bottom: 0 }}
                        className="text-neutral-100 mx-auto font-semibold tracking-wide"
                    >
                        {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item?.name}
                    </Animated.Text>
                </View>
            </Pressable>
        </Animated.View>
    )
}