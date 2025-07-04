import { Group } from '@pradeeparul2/mantine-core';
import { DatePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group } from '@pradeeparul2/mantine-core';
import { DatePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
