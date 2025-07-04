import { useRef } from 'react';
import { Button, Group } from '@pradeeparul2/mantine-core';
import { Dropzone } from '@pradeeparul2/mantine-dropzone';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@pradeeparul2/mantine-core';
import { Dropzone } from '@pradeeparul2/mantine-dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
