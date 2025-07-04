import { PasswordInput, Stack } from '@pradeeparul2/mantine-core';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { PasswordInput, Stack } from '@pradeeparul2/mantine-core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

export const controlledVisibility: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
