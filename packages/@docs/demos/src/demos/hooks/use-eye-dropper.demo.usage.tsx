import { useState } from 'react';
import { ActionIcon, ColorSwatch, Group, Text } from '@pradeeparul2/mantine-core';
import { useEyeDropper } from '@pradeeparul2/mantine-hooks';
import { IconViewfinder } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@pradeeparul2/mantine-core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor} size="xl" radius="md">
        <IconViewfinder size={28} stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}
`;

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor} size="xl" radius="md">
        <IconViewfinder size={28} stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}

export const useEyeDropperUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
