import { Chip } from '@pradeeparul2/mantine-core';
import { IconX } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Chip } from '@pradeeparul2/mantine-core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;

function Demo() {
  return (
    <Chip icon={<IconX size={16} />} color="red" variant="filled" defaultChecked>
      Forbidden
    </Chip>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
