import { useState } from 'react';
import { Text } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${name} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[string | null, string | null]>([null, null]);
    return (
      <>
        <Component
          type="range"
          numberOfColumns={2}
          value={value}
          onChange={setValue}
          visibleFrom="sm"
        />
        <Text ta="center" hiddenFrom="sm">
          Demo is not available on small screens. Make your screen larger to see the demo.
        </Text>
      </>
    );
  };
}

export function getPickerNumberOfColumnsDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    code: getCode(Component.displayName!.replace('@pradeeparul2/mantine-dates/', '')),
    component: getDemo(Component),
  };
}
