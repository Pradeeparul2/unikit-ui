import { Button, Drawer } from '@pradeeparul2/mantine-core';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { Drawer, Button } from '@pradeeparul2/mantine-core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export const offset: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
