import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, BackHandler, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import demoExercises from '../dummyData/demoExercises.json'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ExercisesList from '../components/ExercisesList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState(demoExercises);
    const item = useLocalSearchParams();

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    }
    useEffect(() => {
        console.log(item.name);
        if (item) getExercises(item.name);
    }, [])

    useEffect(() => {
        const backAction = () => {
            router.back();
            return true;
        }
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
        return () => backHandler.remove();
    }, [])

    return (
        <ScrollView>
            <Image className="rounded-b-[40px]" source={item.image} style={{ width: wp(100), height: hp(45) }} />
            <Pressable
                onPress={() => router.back()}
                className="bg-rose-500 mx-4 absolute flex justify-center rounded-full items-center pr-1"
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color='white' />
            </Pressable>

            {/* exercises */}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                    {item.name} exercises
                </Text>
                <View className="mb-10">
                    <ExercisesList data={exercises} />
                </View>
            </View>
            <StatusBar style='light' />
        </ScrollView>
    )
}