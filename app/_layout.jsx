import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from "react-native";

LogBox.ignoreLogs(['react-native-snap-carousel'])
export default function _layout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen options={{ presentation: 'fullScreenModal' }} name='Exercises' />
            <Stack.Screen options={{ presentation: 'modal' }} name='ExerciseDetails' />
        </Stack>
    )
}