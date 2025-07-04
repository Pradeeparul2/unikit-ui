import { DatePicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}

export const weekendDays: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
