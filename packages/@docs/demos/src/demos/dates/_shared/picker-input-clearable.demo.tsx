import dayjs from 'dayjs';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import dayjs from 'dayjs';
import { ${name} } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}

export function getPickerInputClearableDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@pradeeparul2/mantine-dates/', '')),
    component: getDemo(Component),
  };
}
