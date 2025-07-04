import { CloseButton } from '@pradeeparul2/mantine-core';
import { IconXboxX } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@pradeeparul2/mantine-core';

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}
`;

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
