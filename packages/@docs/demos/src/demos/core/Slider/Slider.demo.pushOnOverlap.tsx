import { RangeSlider } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RangeSlider } from '@pradeeparul2/mantine-core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
`;

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}

export const pushOnOverlap: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
