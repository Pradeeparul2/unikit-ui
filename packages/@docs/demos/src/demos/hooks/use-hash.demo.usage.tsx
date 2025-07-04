import { Button, Code, Group, Text } from '@pradeeparul2/mantine-core';
import { randomId, useHash } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useHash, randomId } from '@pradeeparul2/mantine-hooks';
import { Button, Text, Code } from '@pradeeparul2/mantine-core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;

function Demo() {
  const [hash, setHash] = useHash();

  return (
    <>
      <Group justify="center">
        <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      </Group>

      <Text ta="center" mt="md">
        Current hash: <Code>{hash}</Code>
      </Text>
    </>
  );
}

export const useHashDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
