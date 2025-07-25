import { rem, useDirection } from '@pradeeparul2/mantine-core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';

export function DirectionControl() {
  const { toggleDirection, dir } = useDirection();
  return (
    <HeaderControl
      onClick={() => toggleDirection()}
      tooltip={`${dir === 'ltr' ? 'RTL' : 'LTR'} direction`}
    >
      {dir === 'rtl' ? (
        <IconTextDirectionLtr
          style={{ width: rem(22), height: rem(22), pointerEvents: 'none' }}
          stroke={1.5}
        />
      ) : (
        <IconTextDirectionRtl
          style={{ width: rem(22), height: rem(22), pointerEvents: 'none' }}
          stroke={1.5}
        />
      )}
    </HeaderControl>
  );
}
