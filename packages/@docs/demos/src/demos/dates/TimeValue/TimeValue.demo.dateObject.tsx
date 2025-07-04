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
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}

export const dateObject: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
