import { Button, TextInput } from '@pradeeparul2/mantine-core';
import { modals } from '@pradeeparul2/mantine-modals';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Button } from '@pradeeparul2/mantine-core';
import { modals } from '@pradeeparul2/mantine-modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}

export const content: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
