import { useState } from 'react';
import { ColorPicker, Text } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { ColorPicker, Text } from '@pradeeparul2/mantine-core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text mt="md">{value}</Text>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
