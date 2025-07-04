import { useState } from 'react';
import { Button } from '@pradeeparul2/mantine-core';
import { randomId, useDocumentTitle } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@pradeeparul2/mantine-hooks';
import { Button } from '@pradeeparul2/mantine-core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>;
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
