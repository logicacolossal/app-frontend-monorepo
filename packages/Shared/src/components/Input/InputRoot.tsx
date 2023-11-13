import React from 'react';
import { View } from '@expo-monorepo/shared/src/lib/nativewind';
import clsx from 'clsx';
import { ViewProps } from 'react-native';
import { RootContextValues } from './InputProvider';

type InputRootProps = ViewProps & {
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export function InputRoot({
  invalid = false,
  disabled = false,
  required = false,
  ...props
}: InputRootProps) {
  return (
    <View className={clsx('p-2 gap-y-2', props.className)} {...props}>
      <RootContextValues.Provider value={{ invalid, disabled, required }}>
        {props.children}
      </RootContextValues.Provider>
    </View>
  );
}
