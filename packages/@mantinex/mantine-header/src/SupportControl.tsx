import { rem } from '@pradeeparul2/mantine-core';
import { IconHeartFilled } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';
import classes from './SupportControl.module.css';

export function SupportControl() {
  return (
    <HeaderControl
      component="a"
      href="https://opencollective.com/mantinedev"
      tooltip="Sponsor"
      aria-label="Sponsor"
      className={classes.support}
    >
      <IconHeartFilled style={{ width: rem(22), height: rem(22) }} />
    </HeaderControl>
  );
}
