import { Button, TextInput } from '@pradeeparul2/mantine-core';
import { useField } from '@pradeeparul2/mantine-form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, TextInput } from '@pradeeparul2/mantine-core';
import { useField } from '@pradeeparul2/mantine-form';

function Demo() {
  const field = useField({
    initialValue: '',
    clearErrorOnChange: false,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
`;

function Demo() {
  const field = useField({
    initialValue: '',
    clearErrorOnChange: false,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}

export const clearErrorOnChange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
