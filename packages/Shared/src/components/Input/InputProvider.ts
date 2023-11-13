import { createContext, useContext } from 'react';

type InputRootContextValues = {
  invalid: boolean;
  disabled: boolean;
  required: boolean;
};

export const RootContextValues = createContext<InputRootContextValues>(
  {} as InputRootContextValues
);

export function useRootContextValues() {
  return useContext(RootContextValues);
}

// type InputRootContextActions = {};

// export const RootContextActions = createContext<InputRootContextActions>(
//   {} as InputRootContextActions
// );

// export function useRootContextActions() {
//   return useContext(RootContextActions);
// }
