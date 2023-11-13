import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInFragment } from '@expo-monorepo/shared/src/fragments';
import { SignInFormData } from '@expo-monorepo/shared/src/fragments/SignIn/SignInForm';

export function SignIn() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: yupResolver(SignInFragment.Schema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

  return (
    <div className="w-2/3 lg:w-1/3 flex">
      <SignInFragment.Form
        control={control}
        onSubmit={handleSubmit(handleSignIn)}
      />
    </div>
  );
}
