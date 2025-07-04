import { DateTimePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateTimePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`;

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
