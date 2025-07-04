import { Badge } from '@pradeeparul2/mantine-core';
import { useReducedMotion } from '@pradeeparul2/mantine-hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@pradeeparul2/mantine-core';
import { useReducedMotion } from '@pradeeparul2/mantine-hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}

export const useReducedMotionDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
