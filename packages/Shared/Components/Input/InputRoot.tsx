import React from 'react';
import { View } from '@expo-monorepo/shared/lib/nativewind';
import clsx from 'clsx';
import { ViewProps } from 'react-native';

type InputRootProps = ViewProps;

export function InputRoot(props: InputRootProps) {
  return (
    <View className={clsx('p-2', props.className)} {...props}>
      {props.children}
    </View>
  );
}
