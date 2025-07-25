import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const eventsCode = `
import { Badge } from '@pradeeparul2/mantine-core';
import { useIdle } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

export const useIdleEvents: MantineDemo = {
  type: 'code',
  code: eventsCode,
  component: Demo,
  centered: true,
};
