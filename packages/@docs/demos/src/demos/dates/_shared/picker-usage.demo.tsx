import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${name} value={value} onChange={setValue} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<string | null>(null);
    return <Component value={value} onChange={setValue} />;
  };
}

export function getPickerUsageDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    code: getCode(Component.displayName!.replace('@pradeeparul2/mantine-dates/', '')),
    component: getDemo(Component),
  };
}
