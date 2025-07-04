import { CheckIcon, Radio } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, CheckIcon } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
