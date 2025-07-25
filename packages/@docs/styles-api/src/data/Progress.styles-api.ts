import type { ProgressFactory } from '@pradeeparul2/mantine-core';
import type { StylesApiData } from '../types';

export const ProgressStylesApi: StylesApiData<ProgressFactory> = {
  selectors: {
    root: 'Root element',
    section: '`Progress.Section` root element',
    label: '`Progress.Label` root element',
  },

  vars: {
    root: {
      '--progress-radius': 'Controls `border-radius` of track and sections',
      '--progress-size': 'Controls height of progress bar',
      '--progress-transition-duration': 'Controls width `transition-duration` of progress bar',
    },
  },

  modifiers: [
    {
      modifier: 'data-striped',
      selector: 'section',
      condition: '`striped` or `animated` props are set',
    },
    { modifier: 'data-animated', selector: 'section', condition: '`animated` prop is set' },
  ],
};
