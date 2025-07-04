import { SemiCircleProgress } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress } from '@pradeeparul2/mantine-core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`;

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}

export const emptySegmentColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
