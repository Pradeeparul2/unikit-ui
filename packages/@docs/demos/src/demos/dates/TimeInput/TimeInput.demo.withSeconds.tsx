import { TimeInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimeInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`;

function Demo() {
  return <TimeInput withSeconds />;
}

export const withSeconds: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
