import { Text } from '@pradeeparul2/mantine-core';
import { TimeValue } from '@pradeeparul2/mantine-dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text } from '@pradeeparul2/mantine-core';
import { TimeValue } from '@pradeeparul2/mantine-dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}

export const amPmLabels: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
