import { SignInFragment } from '@expo-monorepo/shared/src/fragments';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInFormData } from '@expo-monorepo/shared/src/fragments/SignIn/SignInForm';

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: SignInFragment.Schema.getDefault(),
    resolver: yupResolver(SignInFragment.Schema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

  return (
    <View className="flex-1 px-8 py-12 items-center justify-center">
      <StatusBar />
      <SignInFragment.Form
        control={control}
        onSubmit={handleSubmit(handleSignIn)}
      />
    </View>
  );
}
