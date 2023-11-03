import React from 'react';
import { View, Text, Pressable } from '../../lib/nativewind';
import { Input } from '@expo-monorepo/shared/Components/Input';
import { Button } from '@expo-monorepo/shared/Components/Button';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, 'This field is required.')
    .email('Email format invalid.')
    .default(''),
  password: z
    .string()
    .min(6, 'The password must have at least 6 digits.')
    .default(''),
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;

type SignInFormProps = {
  onSubmit?: () => void;
  onCreateAccount?: () => void;
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
};

export function SignInForm({
  onCreateAccount,
  onSubmit,
  register,
  errors,
}: SignInFormProps) {
  return (
    <View className="flex-1 w-full bg-white shadow-md shadow-black/30 rounded-lg p-2 justify-between">
      <View className="gap-y-5">
        <Input.Root>
          <Input.Label>Email</Input.Label>
          <Input.Content placeholder="Email" {...register('email')} />
          {errors.email && (
            <Text className="text-red-500">{errors.email.message}</Text>
          )}
        </Input.Root>

        <Input.Root>
          <Input.Label>Password</Input.Label>
          <Input.Content
            placeholder="Password"
            secureTextEntry
            {...register('password')}
          />
          {errors.password && (
            <Text className="text-red-500">{errors.password.message}</Text>
          )}
        </Input.Root>
      </View>
      <View className="justify-center gap-y-3 items-center mb-5">
        <Button.Root onPress={onSubmit}>
          <Button.Text>Submit</Button.Text>
        </Button.Root>
        <View className="justify-center items-center flex-row">
          <Text className="text-gray-900">Don't have an account yet? </Text>
          <Pressable onPress={onCreateAccount}>
            <Text className="underline font-semibold text-lime-600">
              Make it here.
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
