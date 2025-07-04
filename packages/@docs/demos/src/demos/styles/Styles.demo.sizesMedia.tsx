import { TextInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <>
      <TextInput size="xs" hiddenFrom="sm" label="My input" placeholder="My input" />
      <TextInput size="xl" visibleFrom="sm" label="My input" placeholder="My input" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput size="xs" hiddenFrom="sm" label="My input" placeholder="My input" />
      <TextInput size="xl" visibleFrom="sm" label="My input" placeholder="My input" />
    </>
  );
}

export const sizesMedia: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [{ fileName: 'Demo.tsx', code, language: 'tsx' }],
};
