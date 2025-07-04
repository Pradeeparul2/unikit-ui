import { Button, Modal } from '@pradeeparul2/mantine-core';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { IconXboxX } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { Modal, Button } from '@pradeeparul2/mantine-core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const closeIcon: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
