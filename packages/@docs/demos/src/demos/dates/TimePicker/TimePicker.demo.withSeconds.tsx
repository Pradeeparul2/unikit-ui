import { TimePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
`;

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}

export const withSeconds: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
