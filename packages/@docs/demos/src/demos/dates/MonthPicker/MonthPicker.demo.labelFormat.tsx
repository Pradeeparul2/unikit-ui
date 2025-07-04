import { useState } from 'react';
import { MonthPicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MonthPicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}

export const labelFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
