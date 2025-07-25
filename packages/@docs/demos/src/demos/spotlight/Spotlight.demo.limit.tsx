import { SpotlightActionData } from '@pradeeparul2/mantine-spotlight';
import { IconSearch } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';
import { SpotlightDemoBase } from './_demo-base';

const code = `
import { Button } from '@pradeeparul2/mantine-core';
import { Spotlight, SpotlightActionData, spotlight } from '@pradeeparul2/mantine-spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        limit={7}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <SpotlightDemoBase
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      limit={7}
      shortcut={null}
      searchProps={{
        leftSection: <IconSearch size={20} stroke={1.5} />,
        placeholder: 'Search...',
      }}
    />
  );
}

export const limit: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
