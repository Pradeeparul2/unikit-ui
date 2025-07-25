import { useState } from 'react';
import { TextInput } from '@pradeeparul2/mantine-core';
import { getHotkeyHandler } from '@pradeeparul2/mantine-hooks';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@pradeeparul2/mantine-hooks';
import { notifications } from '@pradeeparul2/mantine-notifications';
import { TextInput } from '@pradeeparul2/mantine-core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () =>
    notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}

export const useHotkeysDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
