import { RingProgress } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RingProgress } from '@pradeeparul2/mantine-core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}

export const rootColor: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
