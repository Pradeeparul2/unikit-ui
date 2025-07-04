import type { FloatingIndicatorFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const FloatingIndicatorStylesApi: StylesApiData<FloatingIndicatorFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--transition-duration': 'Controls indicator transition duration',
    },
  },
};
