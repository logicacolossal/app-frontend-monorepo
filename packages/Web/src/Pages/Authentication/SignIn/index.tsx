import { SignIn as SingInFragment } from '@expo-monorepo/shared';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormData } from '@expo-monorepo/shared/Fragments/SignIn/SignInForm';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SingInFragment.Schema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

  return (
    <div className="w-1/3 flex">
      <SingInFragment.Form
        register={register}
        onSubmit={handleSubmit(handleSignIn)}
        errors={errors}
      />
    </div>
  );
}
