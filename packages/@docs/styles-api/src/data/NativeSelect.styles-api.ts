import type { NativeSelectFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const NativeSelectStylesApi: StylesApiData<NativeSelectFactory> = {
  selectors: {
    ...InputWrapperStylesApi.selectors,
    ...InputStylesApi.selectors,
  },

  vars: {},
};
