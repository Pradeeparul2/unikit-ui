import { Highlight } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Highlight } from '@pradeeparul2/mantine-core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
