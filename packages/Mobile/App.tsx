import { SignIn } from '@expo-monorepo/shared';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormData } from '@expo-monorepo/shared/Fragments/SignIn/SignInForm';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignIn.Schema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

  return (
    <View className="flex-1 px-8 py-12 items-center justify-center">
      <StatusBar />
      <SignIn.Form
        register={register}
        onSubmit={handleSubmit(handleSignIn)}
        errors={errors}
      />
    </View>
  );
}
