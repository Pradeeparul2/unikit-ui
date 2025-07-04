import { Button, Group, Text } from '@pradeeparul2/mantine-core';
import { randomId, useForceUpdate } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text, Group } from '@pradeeparul2/mantine-core';
import { useForceUpdate, randomId } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
