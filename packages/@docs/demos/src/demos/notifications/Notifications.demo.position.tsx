import { Button, Group } from '@pradeeparul2/mantine-core';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@pradeeparul2/mantine-core';
import { notifications } from '@pradeeparul2/mantine-notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: \`Notification at \${position}\`,
          message: \`Notification at \${position} message\`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}`;

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: `Notification at ${position}`,
          message: `Notification at ${position} message`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}

export const position: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
