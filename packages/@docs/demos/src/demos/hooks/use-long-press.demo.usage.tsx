import { Button } from '@pradeeparul2/mantine-core';
import { useLongPress } from '@pradeeparul2/mantine-hooks';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@pradeeparul2/mantine-core';
import { useLongPress } from '@pradeeparul2/mantine-hooks';
import { notifications } from '@pradeeparul2/mantine-notifications';

function Demo() {
  const handlers = useLongPress(() => notifications.show({ message: 'Long press triggered' }));
  return <Button {...handlers}>Press and hold</Button>;
}
`;

function Demo() {
  const handlers = useLongPress(() => notifications.show({ message: 'Long press triggered' }));
  return <Button {...handlers}>Press and hold</Button>;
}

export const useLongPressDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
