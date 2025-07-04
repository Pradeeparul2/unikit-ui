import { Group } from '@pradeeparul2/mantine-core';
import { DatePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group } from '@pradeeparul2/mantine-core';
import { DatePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}

export const firstDayOfWeek: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
