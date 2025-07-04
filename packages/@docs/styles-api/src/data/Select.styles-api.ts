import type { SelectFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const SelectStylesApi: StylesApiData<SelectFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
  },

  vars: {},
};
