import type { BackgroundImageFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const BackgroundImageStylesApi: StylesApiData<BackgroundImageFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--bi-radius': 'Controls `border-radius`',
    },
  },
};
