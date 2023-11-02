import React from 'react';
import { Text } from '@expo-monorepo/shared/lib/nativewind';
import clsx from 'clsx';
import { TextProps } from 'react-native';

type InputLabelProps = TextProps;

export function InputLabel(props: InputLabelProps) {
  return (
    <Text className={clsx('p-2 text-gray-900', props.className)} {...props}>
      {props.children}
    </Text>
  );
}
