import { Carousel } from '@pradeeparul2/mantine-carousel';
import { MantineDemo } from '@mantinex/demo';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@pradeeparul2/mantine-carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Slides count={6} />
    </Carousel>
  );
}

export const breakpoints: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
