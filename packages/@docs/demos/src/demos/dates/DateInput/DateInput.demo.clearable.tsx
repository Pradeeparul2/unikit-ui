import dayjs from 'dayjs';
import { DateInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { DateInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <DateInput
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}

export const clearable: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
