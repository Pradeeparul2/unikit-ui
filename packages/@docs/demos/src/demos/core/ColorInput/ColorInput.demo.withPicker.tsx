import { ColorInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`;

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}

export const withPicker: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
