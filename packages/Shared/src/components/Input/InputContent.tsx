import React, { memo } from 'react';
import { TextInput } from '@expo-monorepo/shared/src/lib/nativewind';
import clsx from 'clsx';
import { TextInputProps } from 'react-native';
import { StyledComponent } from 'nativewind';
import { useRootContextValues } from './InputProvider';

type InputContentProps = TextInputProps;

function InputContentMemo(props: InputContentProps) {
  const { invalid } = useRootContextValues();
  return (
    <StyledComponent
      component={TextInput}
      className={clsx(
        'flex-grow p-2 rounded-lg focus:outline-0',
        invalid && 'text-red-500',
        props.className
      )}
      placeholderTextColor={invalid ? 'rgb(239, 68, 68)' : 'rgb(75, 85, 99)'}
      {...props}
    />
  );
}

const InputContent = memo(InputContentMemo);
export default InputContent;
