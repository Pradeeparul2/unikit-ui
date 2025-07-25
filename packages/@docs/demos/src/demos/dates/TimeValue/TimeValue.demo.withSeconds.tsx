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
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}

export const withSeconds: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
