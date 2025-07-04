import { ColorInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
