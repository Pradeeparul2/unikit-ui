import { useRef } from 'react';
import { Carousel } from '@pradeeparul2/mantine-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { MantineDemo } from '@mantinex/demo';
import { Slides } from './_slides';

const code = `
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@pradeeparul2/mantine-carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Slides count={5} />
    </Carousel>
  );
}
`;

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const autoplay: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
