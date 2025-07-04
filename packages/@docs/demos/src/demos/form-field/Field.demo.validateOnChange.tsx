import { TextInput } from '@pradeeparul2/mantine-core';
import { isEmail, useField } from '@pradeeparul2/mantine-form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@pradeeparul2/mantine-core';
import { useField, isEmail } from '@pradeeparul2/mantine-form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
`;

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}

export const validateOnChange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
