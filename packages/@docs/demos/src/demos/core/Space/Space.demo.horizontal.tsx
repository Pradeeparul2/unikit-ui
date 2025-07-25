import { Space, Text } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const code = `
import { Text, Space } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`;

export const horizontal: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ prop: 'h', type: 'size', initialValue: 'md', libraryValue: '__' }],
};
