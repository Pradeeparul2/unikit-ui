import { Button, MantineThemeProvider } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MantineProvider, Button } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineThemeProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineThemeProvider>
  );
}

export const activeClassNameEmpty: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
