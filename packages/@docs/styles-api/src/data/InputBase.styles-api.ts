import type { InputBaseFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const InputBaseStylesApi: StylesApiData<InputBaseFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
