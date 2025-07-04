import { Button, em, Tooltip } from '@pradeeparul2/mantine-core';
import { useMediaQuery } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Tooltip, Button, em } from '@pradeeparul2/mantine-core';
import { useMediaQuery } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}

export const useMediaQueryHook: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
