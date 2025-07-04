import { Highlight } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Highlight } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
