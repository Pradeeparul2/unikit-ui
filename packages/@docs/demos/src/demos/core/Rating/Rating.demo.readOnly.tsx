import { Rating } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@pradeeparul2/mantine-core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
