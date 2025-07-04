import { Button, MultiSelect } from '@pradeeparul2/mantine-core';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect, Button } from '@pradeeparul2/mantine-core';
import { useDisclosure } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`;

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}

export const dropdownOpened: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
