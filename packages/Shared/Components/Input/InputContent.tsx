import React from 'react';
import { TextInput } from '@expo-monorepo/shared/lib/nativewind';
import clsx from 'clsx';
import { TextInputProps } from 'react-native';
import { StyledComponent } from 'nativewind';

type InputContentProps = TextInputProps;

export const InputContent = React.forwardRef(function InputContent(
  props: InputContentProps,
  ref
) {
  return (
    <StyledComponent
      component={TextInput}
      className={clsx(
        'border-2 border-gray-600 p-2 rounded-lg text-gray-900',
        props.className
      )}
      {...props}
      ref={ref}
    />
  );
});
