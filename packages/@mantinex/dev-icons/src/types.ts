import type { BoxProps, ElementProps } from '@pradeeparul2/mantine-core';

export interface DevIconProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity'> {
  size?: number;
}
