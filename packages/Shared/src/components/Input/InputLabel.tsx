import React, { memo } from 'react';
import { Text } from '@expo-monorepo/shared/src/lib/nativewind';
import clsx from 'clsx';
import { TextProps } from 'react-native';
import { useRootContextValues } from './InputProvider';

type InputLabelProps = TextProps;

function InputLabelMemo(props: InputLabelProps) {
  const { required } = useRootContextValues();
  return (
    <Text
      className={clsx(
        'p-2 text-md font-semibold text-gray-900',
        props.className
      )}
      {...props}
    >
      {props.children}
      {required && <Text className="text-red-500 font-bold"> *</Text>}
    </Text>
  );
}

const InputLabel = memo(InputLabelMemo);
export default InputLabel;
