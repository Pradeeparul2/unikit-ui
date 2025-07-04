import { Box, Text, TextInput } from '@pradeeparul2/mantine-core';
import { useDebouncedState } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDebouncedState } from '@pradeeparul2/mantine-hooks';
import { TextInput, Text } from '@pradeeparul2/mantine-core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        label="Enter value to see debounce effect"
        placeholder="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text mt="sm">
        <Text component="span" c="dimmed" size="sm">
          Debounced value:
        </Text>{' '}
        {value.trim() || '[empty string]'}
      </Text>
    </Box>
  );
}

export const useDebouncedStateLeading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
