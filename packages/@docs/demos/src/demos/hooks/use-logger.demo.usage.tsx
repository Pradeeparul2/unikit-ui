import { useState } from 'react';
import { Button } from '@pradeeparul2/mantine-core';
import { useLogger } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { useLogger } from '@pradeeparul2/mantine-hooks';
import { Button } from '@pradeeparul2/mantine-core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}

export const useLoggerDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
