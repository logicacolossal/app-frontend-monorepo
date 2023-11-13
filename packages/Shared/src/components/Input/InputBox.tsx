import { View } from '@expo-monorepo/shared/src/lib/nativewind';
import { ViewProps } from 'react-native';
import clsx from 'clsx';
import { memo } from 'react';
import { useRootContextValues } from './InputProvider';

type InputBoxProps = ViewProps;

function InputBoxMemo(props: InputBoxProps) {
  const { invalid } = useRootContextValues();
  return (
    <View
      className={clsx(
        'flex-row border-2 border-gray-500 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10',
        invalid && 'border-red-700',
        props.className
      )}
      {...props}
    >
      {props.children}
    </View>
  );
}

const InputBox = memo(InputBoxMemo);

export default InputBox;
