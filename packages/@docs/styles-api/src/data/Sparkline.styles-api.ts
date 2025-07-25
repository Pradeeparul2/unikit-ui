import type { SparklineFactory } from '@pradeeparul2/mantine-charts';
import type { StylesApiData } from '../types';

export const SparklineStylesApi: StylesApiData<SparklineFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--chart-color': 'Controls stroke and fill color',
    },
  },

  modifiers: [],
};
