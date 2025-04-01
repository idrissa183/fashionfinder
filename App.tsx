import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css';

export default function App() {
    return (
        <View className="flex-1 justify-center items-center bg-white" >
            <Text className="text-3xl text-red-400 font-bold">Hello, World</Text>
            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
