import type { PaperFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const PaperStylesApi: StylesApiData<PaperFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--paper-radius': 'Controls `border-radius`',
      '--paper-shadow': 'Controls `box-shadow`',
    },
  },

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: '`withBorderProp` is set' },
  ],
};
