import type { __BaseInputProps, __InputStylesNames } from '@pradeeparul2/mantine-core';

export const inputDefaultProps: __BaseInputProps = {
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
  withAsterisk: true,
  leftSection: 'test-left-section',
  rightSection: 'test-right-section',
};

export const inputStylesApiSelectors: __InputStylesNames[] = [
  'root',
  'description',
  'error',
  'label',
  'wrapper',
  'required',
  'section',
];
