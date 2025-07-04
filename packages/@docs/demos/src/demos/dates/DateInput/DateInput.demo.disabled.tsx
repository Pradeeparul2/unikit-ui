import { DateInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
