import { Box, Portal, Text } from '@pradeeparul2/mantine-core';
import { useHeadroom } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Portal, Text } from '@pradeeparul2/mantine-core';
import { useHeadroom } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: 60,
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : '-110px'}, 0)\`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

`;

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: 60,
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

export const useHeadroomDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
