import { useState } from 'react';
import { YearPicker } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { YearPicker } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}

export const yearsListFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
