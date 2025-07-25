import { PinInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PinInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
`;

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}

export const regexp: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
