import type { DialogFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const DialogStylesApi: StylesApiData<DialogFactory> = {
  selectors: {
    root: 'Root element',
    closeButton: 'Close button',
  },

  vars: {
    root: {
      '--dialog-size': 'Controls `width` of the dialog',
    },
  },
};
