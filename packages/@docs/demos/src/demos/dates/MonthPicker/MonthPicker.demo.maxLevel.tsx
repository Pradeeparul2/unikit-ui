import { MonthPicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MonthPicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`;

function Demo() {
  return <MonthPicker maxLevel="year" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
