import { Box, Code, Group, Text } from '@pradeeparul2/mantine-core';
import { useMouse } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Code, Group, Box } from '@pradeeparul2/mantine-core';
import { useMouse } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center" mt="sm">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
