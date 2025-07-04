import { Input } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Input } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}

export const placeholder: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
