import { NumberInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}

export const allowNegative: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
