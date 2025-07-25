import { DatePicker, DatesProvider } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker, DatesProvider } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}

export const consistentWeeks: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
