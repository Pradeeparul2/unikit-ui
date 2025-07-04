import { InlineCodeHighlight } from '@pradeeparul2/mantine-code-highlight';
import { Text } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text } from '@pradeeparul2/mantine-core';
import { InlineCodeHighlight } from '@pradeeparul2/mantine-code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
