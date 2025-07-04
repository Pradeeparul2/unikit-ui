import type { KbdFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const KbdStylesApi: StylesApiData<KbdFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--kbd-fz': 'Controls `font-size`',
    },
  },
};
