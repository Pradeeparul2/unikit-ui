import { Anchor, Checkbox } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox, Anchor } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
