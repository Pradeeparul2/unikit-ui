import { NumberFormatter } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberFormatter } from '@pradeeparul2/mantine-core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`;

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}

export const decimalScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
