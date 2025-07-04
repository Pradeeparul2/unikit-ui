import { DateInput } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { DateInput } from '@pradeeparul2/mantine-dates';


function Demo() {
  return (
    <DateInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateInput {...props} placeholder="Input placeholder" />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
