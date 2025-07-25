import { ScatterChart } from '@pradeeparul2/mantine-charts';
import { MantineDemo } from '@mantinex/demo';
import { doubleData, doubleDataCode } from './_data';

const code = `
import { ScatterChart } from '@pradeeparul2/mantine-charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 20 }}
    />
  );
}
`;

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={doubleData}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 20 }}
    />
  );
}

export const legendPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: doubleDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
