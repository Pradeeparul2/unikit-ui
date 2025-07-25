import { Button } from '@pradeeparul2/mantine-core';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@pradeeparul2/mantine-core';
import { notifications } from '@pradeeparul2/mantine-notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
      }
    >
      Show notification
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
      }
    >
      Show notification
    </Button>
  );
}

export const base: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
