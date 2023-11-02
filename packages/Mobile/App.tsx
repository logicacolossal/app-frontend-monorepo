import { SignInForm } from '@expo-monorepo/shared';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 px-8 py-12 items-center justify-center">
      <StatusBar />
      <SignInForm />
    </View>
  );
}
