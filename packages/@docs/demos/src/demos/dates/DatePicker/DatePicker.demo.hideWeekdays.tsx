import { DatePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`;

function Demo() {
  return <DatePicker hideWeekdays />;
}

export const hideWeekdays: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
