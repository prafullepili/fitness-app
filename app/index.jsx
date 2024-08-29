import { View, Text, Image, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center">
            <StatusBar style='light' />
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), flex: 1 }}
                start={{ x: 1, y: 0 }}
                end={{ x: 0.5, y: .9 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <View className="flex items-center">
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Wroktouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        For you
                    </Text>
                </View>
                <View>
                    <Pressable
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{ fontSize: hp(3) }} className="text-white font font-bold tracking-wide">Get Started</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}
