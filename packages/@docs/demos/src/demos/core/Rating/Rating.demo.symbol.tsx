import { Rating } from '@pradeeparul2/mantine-core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@pradeeparul2/mantine-core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}
`;

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}

export const symbol: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
