import { useState } from 'react';
import { DateInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { DateInput } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DateInput value={value} onChange={setValue} label="Date input" placeholder="Date input" />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
