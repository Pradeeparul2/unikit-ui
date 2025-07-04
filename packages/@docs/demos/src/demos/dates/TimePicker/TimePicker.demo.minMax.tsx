import { TimePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimePicker label="Enter time" min="10:00" max="18:30" />;
}
`;

function Demo() {
  return <TimePicker label="Enter time" min="10:00" max="18:30" />;
}

export const minMax: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
