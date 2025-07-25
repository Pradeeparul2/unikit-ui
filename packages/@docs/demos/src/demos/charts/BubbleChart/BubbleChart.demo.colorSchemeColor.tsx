import { BubbleChart } from '@pradeeparul2/mantine-charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';
import classes from './BubbleChart.demo.colorSchemeColor.module.css';

const cssCode = `
.root {
  @mixin light {
    --scatter-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --scatter-color: var(--mantine-color-lime-4);
  }
}`;

const code = `
import { BubbleChart } from '@pradeeparul2/mantine-charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`;

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

export const colorSchemeColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: cssCode, language: 'scss', fileName: 'Demo.module.css' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
