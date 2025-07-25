import { DatePickerInput } from '@pradeeparul2/mantine-dates';
import { getSharedPickerInputDemos } from '../_shared';

export const { usage, multiple, range, configurator, modal, icon, clearable, valueFormatter } =
  getSharedPickerInputDemos(DatePickerInput);

export { valueFormat } from './DatePickerInput.demo.valueFormat';
export { disabled } from './DatePickerInput.demo.disabled';
export { presets } from './DatePickerInput.demo.presets';
export { presetsRange } from './DatePickerInput.demo.presetsRange';
