import { Text, TextInput } from '@pradeeparul2/mantine-core';
import { useInputState, usePrevious } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Text } from '@pradeeparul2/mantine-core';
import { usePrevious, useInputState } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}

export const usePreviousUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
