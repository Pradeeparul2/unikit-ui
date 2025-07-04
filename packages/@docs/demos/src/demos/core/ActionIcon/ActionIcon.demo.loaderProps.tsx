import { ActionIcon } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@pradeeparul2/mantine-core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}

export const loaderProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
