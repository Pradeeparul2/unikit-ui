import type { TextInputFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const TextInputStylesApi: StylesApiData<TextInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
