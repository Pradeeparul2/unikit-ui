import type { TagsInputFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const TagsInputStylesApi: StylesApiData<TagsInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
    pill: 'Value pill',
    inputField: 'Input field',
    pillsList: 'List of pills, also contains input field',
  },

  vars: {},
};
