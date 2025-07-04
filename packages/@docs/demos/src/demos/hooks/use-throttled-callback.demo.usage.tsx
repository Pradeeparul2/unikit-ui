import { useState } from 'react';
import { Text, TextInput } from '@pradeeparul2/mantine-core';
import { useThrottledCallback } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, TextInput } from '@pradeeparul2/mantine-core';
import { useThrottledCallback } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`;

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}

export const useThrottledCallbackUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
