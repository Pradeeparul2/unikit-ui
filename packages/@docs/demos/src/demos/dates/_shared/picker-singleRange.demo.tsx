import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${name} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[string | null, string | null]>([null, null]);
    return <Component type="range" allowSingleDateInRange value={value} onChange={setValue} />;
  };
}

export function getPickerSingleRangeDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    code: getCode(Component.displayName!.replace('@pradeeparul2/mantine-dates/', '')),
    component: getDemo(Component),
  };
}
