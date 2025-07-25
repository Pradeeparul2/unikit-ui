import type { PopoverFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const PopoverStylesApi: StylesApiData<PopoverFactory> = {
  selectors: {
    dropdown: 'Dropdown element',
    arrow: 'Dropdown arrow',
    overlay: 'Overlay element',
  },

  vars: {
    dropdown: {
      '--popover-radius': 'Controls dropdown border-radius',
      '--popover-shadow': 'Controls dropdown box-shadow',
    },
  },

  modifiers: [
    {
      modifier: 'data-position',
      selector: 'dropdown',
      value: 'Value of floating ui dropdown position',
    },
  ],
};
