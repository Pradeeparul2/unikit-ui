import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@pradeeparul2/mantine-dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${name}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Component
        dropdownType="modal"
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
    );
  };
}

export function getPickerInputModalDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@pradeeparul2/mantine-dates/', '')),
    component: getDemo(Component),
  };
}
