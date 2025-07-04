import { NativeSelect } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NativeSelect } from '@pradeeparul2/mantine-core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`;

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
