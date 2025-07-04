import { Badge } from '@pradeeparul2/mantine-core';
import { useColorScheme } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@pradeeparul2/mantine-core';
import { useColorScheme } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
