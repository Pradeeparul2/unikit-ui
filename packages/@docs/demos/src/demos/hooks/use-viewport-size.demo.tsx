import { Text } from '@pradeeparul2/mantine-core';
import { useViewportSize } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useViewportSize } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text ta="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
