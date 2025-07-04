import { Button, CopyButton } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CopyButton, Button } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
