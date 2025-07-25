import { Button, Text } from '@pradeeparul2/mantine-core';
import { modals } from '@pradeeparul2/mantine-modals';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text } from '@pradeeparul2/mantine-core';
import { modals } from '@pradeeparul2/mantine-modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`;

function Demo() {
  const openModal = () =>
    modals.openConfirmModal({
      modalId: 'test-id',
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onCancel: () =>
        notifications.show({
          title: 'Canceled',
          message: 'Confirm modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.show({
          title: 'Confirmed',
          message: 'Confirm modal was confirmed',
          color: 'teal',
        }),
    });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}

export const confirm: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
