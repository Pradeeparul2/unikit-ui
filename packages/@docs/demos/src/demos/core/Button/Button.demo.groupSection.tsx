import { Button } from '@pradeeparul2/mantine-core';
import { useCounter } from '@pradeeparul2/mantine-hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button } from '@pradeeparul2/mantine-core';
import { useCounter } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
`;

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}

export const groupSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
