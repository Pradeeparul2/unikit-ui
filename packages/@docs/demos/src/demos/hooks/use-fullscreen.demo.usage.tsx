import { Button } from '@pradeeparul2/mantine-core';
import { useFullscreen } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useFullscreen } from '@pradeeparul2/mantine-hooks';
import { Button } from '@pradeeparul2/mantine-core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}

export const useFullscreenDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
