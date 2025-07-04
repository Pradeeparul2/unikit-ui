import { useState } from 'react';
import { Text } from '@pradeeparul2/mantine-core';
import { usePageLeave } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { usePageLeave } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text ta="center">Mouse left the page {leftsCount} times</Text>;
}

export const usePageLeaveDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
