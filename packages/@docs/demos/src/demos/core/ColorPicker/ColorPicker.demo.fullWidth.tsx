import { ColorPicker } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorPicker } from '@pradeeparul2/mantine-core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
