import { SemiCircleProgress } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}

export const labelPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
