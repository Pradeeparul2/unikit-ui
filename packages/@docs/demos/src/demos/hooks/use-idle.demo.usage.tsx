import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
