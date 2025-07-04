import { DateInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
`;

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}

export const format: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
