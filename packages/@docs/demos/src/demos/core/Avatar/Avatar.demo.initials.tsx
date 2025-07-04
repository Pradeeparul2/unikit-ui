import { Avatar, Group } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';
import { names, namesCode } from './_mockdata';

const code = `
import { Avatar, Group } from '@pradeeparul2/mantine-core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`;

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}

export const initials: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
