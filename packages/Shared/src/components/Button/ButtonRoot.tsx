import React from 'react';
import { TouchableOpacity } from '@expo-monorepo/shared/src/lib/nativewind';
import { TouchableOpacityProps } from 'react-native';
import clsx from 'clsx';

type ButtonRootProps = TouchableOpacityProps;

export function ButtonRoot(props: ButtonRootProps) {
  return (
    <TouchableOpacity
      className={clsx(
        'w-full bg-pastel-green-500 p-2 items-center justify-center rounded-xl',
        props.className
      )}
      {...props}
    >
      {props.children}
    </TouchableOpacity>
  );
}
