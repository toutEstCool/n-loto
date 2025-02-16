'use client';

import { FC, memo, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/shared/ui/carousel';
import { TopSliderCard } from '../../top-slider-card';

interface ISliderProps {
  cards: Array<{
    type: string;
    amount: string;
    isBigWin: boolean;
    winners: number;
    timeAgo: string;
  }>;
}

export const Slider: FC<ISliderProps> = memo(({ cards }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateIndex = () => setCurrentIndex(api.selectedScrollSnap());

    api.on('select', updateIndex);

    return () => {
      api.off('select', updateIndex);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const autoplay = () => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className={`${card.isBigWin ? '352px' : '176px'} mr-3 sm:mr-6`}
            >
              <TopSliderCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
});

Slider.displayName = 'Slider';
