import { TimeInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimeInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return <TimeInput disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
