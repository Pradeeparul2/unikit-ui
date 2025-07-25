import type { FileInputFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const FileInputStylesApi: StylesApiData<FileInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    placeholder: 'Placeholder text',
  },

  vars: {},
};
