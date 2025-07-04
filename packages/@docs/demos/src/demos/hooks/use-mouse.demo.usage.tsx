import { Code, Text } from '@pradeeparul2/mantine-core';
import { useMouse } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Code } from '@pradeeparul2/mantine-core';
import { useMouse } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
