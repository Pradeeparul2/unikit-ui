import { YearPickerInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { YearPickerInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}

export const valueFormat: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
