import { NumberInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}

export const fixedDecimalScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
