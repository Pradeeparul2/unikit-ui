import { Grid } from '@pradeeparul2/mantine-core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@pradeeparul2/mantine-core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}

export const content: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
