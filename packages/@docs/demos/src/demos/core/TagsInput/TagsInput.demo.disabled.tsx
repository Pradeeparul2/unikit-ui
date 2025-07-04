import { TagsInput } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
`;

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
