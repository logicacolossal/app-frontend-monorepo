import React from 'react';
import { TextInput } from '@expo-monorepo/shared/lib/nativewind';
import clsx from 'clsx';
import { TextInputProps } from 'react-native';

type InputContentProps = TextInputProps;

export function InputContent(props: InputContentProps) {
  return (
    <TextInput
      className={clsx(
        'border-2 border-gray-600 p-2 rounded-lg text-gray-900',
        props.className
      )}
      {...props}
    />
  );
}
