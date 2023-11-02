import React from 'react';
import { View, Text, Pressable } from '../lib/nativewind';
import { Input } from '@expo-monorepo/shared/Components/Input';
import { Button } from '@expo-monorepo/shared/Components/Button';

export function SignInForm() {
  return (
    <View className="flex-1 w-full bg-white shadow-md shadow-black/30 rounded-lg p-2 justify-between">
      <View className="gap-y-5">
        <Input.Root>
          <Input.Label>Label</Input.Label>
          <Input.Content />
        </Input.Root>
        <Input.Root>
          <Input.Label>Label 2</Input.Label>
          <Input.Content />
        </Input.Root>
      </View>
      <View className="justify-center gap-y-3 items-center mb-5">
        <Button.Root>
          <Button.Text>Submit</Button.Text>
        </Button.Root>
        <View className="justify-center items-center flex-row">
          <Text className="text-gray-900">Don't have an account yet? </Text>
          <Pressable>
            <Text className="underline font-semibold text-lime-600">
              Make it here.
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
