import { createSafeContext, GetStylesApi } from '@pradeeparul2/mantine-core';
import type { CarouselFactory } from './Carousel';

interface CarouselContextValue {
  getStyles: GetStylesApi<CarouselFactory>;
  orientation: 'horizontal' | 'vertical' | undefined;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContextValue>(
  'Carousel component was not found in tree'
);
