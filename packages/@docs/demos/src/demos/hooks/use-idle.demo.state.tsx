import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const initialStateCode = `
import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleInitialState: MantineDemo = {
  type: 'code',
  code: initialStateCode,
  component: Demo,
  centered: true,
};
