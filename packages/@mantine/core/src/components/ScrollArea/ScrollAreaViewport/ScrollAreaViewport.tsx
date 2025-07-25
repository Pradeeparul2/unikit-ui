import { forwardRef } from 'react';
import { useMergedRef } from '@pradeeparul2/mantine-hooks';
import { Box, BoxProps, ElementProps } from '../../../core';
import { useScrollAreaContext } from '../ScrollArea.context';

export interface ScrollAreaViewportProps extends BoxProps, ElementProps<'div'> {}

export const ScrollAreaViewport = forwardRef<HTMLDivElement, ScrollAreaViewportProps>(
  ({ children, style, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);

    return (
      <Box
        {...others}
        ref={rootRef}
        style={{
          overflowX: ctx.scrollbarXEnabled ? 'scroll' : 'hidden',
          overflowY: ctx.scrollbarYEnabled ? 'scroll' : 'hidden',
          ...style,
        }}
      >
        <div {...ctx.getStyles('content')} ref={ctx.onContentChange}>
          {children}
        </div>
      </Box>
    );
  }
);

ScrollAreaViewport.displayName = '@pradeeparul2/mantine-core/ScrollAreaViewport';
