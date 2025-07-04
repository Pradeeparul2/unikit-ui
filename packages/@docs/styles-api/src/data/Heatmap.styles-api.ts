import type { HeatmapFactory } from '@pradeeparul2/mantine-charts';
import type { StylesApiData } from '../types';

export const HeatmapStylesApi: StylesApiData<HeatmapFactory> = {
  selectors: {
    root: 'Root element',
    weekdayLabel: 'Weekday text element',
    monthLabel: 'Month text element',
    rect: 'Rect that represents date',
  },

  vars: {},
  modifiers: [],
};
