import { TimePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
`;

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}

export const format12h: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
