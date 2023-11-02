import React from 'react';
import { Text } from '@expo-monorepo/shared/lib/nativewind';
import { TextProps } from 'react-native';
import clsx from 'clsx';

type ButtonTextProps = TextProps;

export function ButtonText(props: ButtonTextProps) {
  return (
    <Text
      className={clsx('text-lg font-bold text-gray-900', props.className)}
      {...props}
    >
      {props.children}
    </Text>
  );
}
