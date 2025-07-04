import { Text } from '@pradeeparul2/mantine-core';
import { useDocumentTitle, useDocumentVisibility } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text } from '@pradeeparul2/mantine-core';
import { useDocumentTitle, useDocumentVisibility } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
