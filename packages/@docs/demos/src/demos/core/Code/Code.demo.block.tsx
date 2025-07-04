import { Code } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code } from '@pradeeparul2/mantine-core';

const codeForPreviousDemo = \`import { Code } from '@pradeeparul2/mantine-core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import { Code } from '@pradeeparul2/mantine-core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
