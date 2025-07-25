import { Button, Tooltip } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" {...props}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}

const code = `
import { Tooltip, Button } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'color',
      type: 'color',
      initialValue: 'blue',
      libraryValue: '__none__',
    },
  ],
};
