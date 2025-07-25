import type { ScrollAreaFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const ScrollAreaStylesApi: StylesApiData<ScrollAreaFactory> = {
  selectors: {
    root: 'Root element',
    content: 'Wraps component children',
    viewport: 'Main scrollable area',
    scrollbar: 'Horizontal or vertical scrollbar root',
    thumb: 'Scrollbar thumb',
    corner: 'Corner between horizontal and vertical scrollbars',
  },

  vars: {
    root: {
      '--scrollarea-scrollbar-size': 'Scrollbar size',
    },
  },

  modifiers: [
    { modifier: 'data-hidden', selector: ['scrollbar', 'corner'], condition: 'type="never"' },
    { modifier: 'data-hovered', selector: 'corner', condition: 'One of the scrollbars is hovered' },
    {
      modifier: 'data-orientation',
      selector: 'scrollbar',
      value: '"horizontal" or "vertical" depending on scrollbar position',
    },
  ],
};
