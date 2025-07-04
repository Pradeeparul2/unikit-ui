import { Box, Tooltip } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Tooltip } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}

export const floating: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
