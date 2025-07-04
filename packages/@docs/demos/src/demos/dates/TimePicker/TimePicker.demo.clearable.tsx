import { TimePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
`;

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}

export const clearable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
