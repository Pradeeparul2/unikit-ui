import { Kbd } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Kbd } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}
`;

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
