import { Button } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@pradeeparul2/mantine-core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`;

function Demo() {
  return <Button disabled>Disabled button</Button>;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
