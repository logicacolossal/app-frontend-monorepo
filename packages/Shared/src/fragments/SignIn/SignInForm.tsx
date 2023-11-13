import React from 'react';
import {
  View,
  Text,
  Pressable,
} from '@expo-monorepo/shared/src/lib/nativewind';
import { Input, Button } from '@expo-monorepo/shared/src/components';
import { Control, Controller } from 'react-hook-form';
import * as Schema from 'yup';

export type SignInFormData = {
  email: string;
  password: string;
};

type SignInFormProps = {
  onSubmit?: () => void;
  onCreateAccount?: () => void;
  control: Control<SignInFormData>;
};

export const SignInFormSchema: Schema.ObjectSchema<SignInFormData> =
  Schema.object({
    email: Schema.string()
      .meta({ label: 'Email', placeholder: 'email@gmail.com' })
      .email('Email format invalid.')
      .required('This field is required.')
      .default(''),
    password: Schema.string()
      .meta({ label: 'Password', placeholder: 'Type your password' })
      .required('This field is required.')
      .min(6, 'The password must have at least 6 digits.')
      .default(''),
  });

export function SignInForm({
  onCreateAccount,
  onSubmit,
  control,
}: SignInFormProps) {
  const {
    fields: { email, password },
  } = SignInFormSchema.describe<SignInFormData>();

  return (
    <View className="flex-1 w-full bg-white shadow-lg shadow-black/20 rounded-lg p-2 justify-between">
      <View className="gap-y-5">
        <View>
          <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { invalid, error },
            }) => (
              <Input.Root invalid={invalid} required={!email.optional}>
                <Input.Label>{email.meta?.label}</Input.Label>
                <Input.Box>
                  <Input.Content
                    onChangeText={onChange}
                    value={value}
                    placeholder="Email"
                  />
                </Input.Box>
                {error && <Text className="text-red-500">{error.message}</Text>}
              </Input.Root>
            )}
          />
        </View>

        <View>
          <Controller
            name="password"
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { invalid, error },
            }) => (
              <Input.Root invalid={invalid} required={!password.optional}>
                <Input.Label>{password.meta?.label}</Input.Label>
                <Input.Box>
                  <Input.Content
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    secureTextEntry
                  />
                </Input.Box>
                {error && <Text className="text-red-500">{error.message}</Text>}
              </Input.Root>
            )}
          />
        </View>
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
