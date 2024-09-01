import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { View, Text, Pressable, ScrollView } from 'react-native';
import Anticons from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function ExerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
    return (
        <View className="flex flex-1 mt-5">
            <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
                <Image
                    source={{ uri: item.gifUrl }}
                    className="rounded-b-[40px]"
                    contentFit='cover'
                    style={{ width: wp(100), height: wp(100), backgroundColor: 'white' }}
                />
            </View>

            {/* Details */}
            <ScrollView
                className="mx-4 space-y-2 mt-3"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 200 }}>
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()}
                    style={{ fontSize: hp(3.5) }}
                    className="font-semibold text-neutral-800 tracking-wide"
                >
                    {item.name}
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(100).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide"
                >
                    Equipment <Text className="font-bold text-neutral-800">
                        {item?.equipment}
                    </Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(200).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide"
                >
                    Secondary Muscles <Text className="font-bold text-neutral-800">
                        {item?.secondaryMuscles}
                    </Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-700 tracking-wide"
                >
                    Target <Text className="font-bold text-neutral-800">
                        {item?.target}
                    </Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()} style={{ fontSize: hp(3) }} className="font-semibold text-neutral-800 tracking-wide"
                >
                    Instructions
                </Animated.Text>

                {item?.instructions.split(',').map((instruction, index) => {
                    return (
                        <Animated.Text
                            entering={FadeInDown.delay((index + 6) * 100).duration(300).springify()}
                            key={instruction}
                            style={{ fontSize: hp(1.7) }}
                            className="text-neutral-800 tracking-wide"
                        >
                            {instruction}
                        </Animated.Text>
                    )
                })}
            </ScrollView>
            <View>
                <Pressable
                    onPress={() => router.back()}
                    style={{ padding: 3, marginRight: 10 }}
                    className="border absolute bottom-5 right-1 text-center rounded-full border-neutral-400"
                >
                    {/* <Text className="text-center rounded-full text-white" style={{ fontSize: wp(4), paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#f43f5e' }}>Close</Text> */}
                    <Anticons name='closecircle' size={hp(4)} color="#343434" />
                </Pressable>
            </View>
            <StatusBar style='dark' />
        </View>
    )
}