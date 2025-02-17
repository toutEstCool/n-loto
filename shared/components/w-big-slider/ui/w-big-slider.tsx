import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/shared/ui/carousel';
import Image from 'next/image';

interface IWBigSliderProps {
  items: number;
  renderItem?: (index: number) => React.ReactNode;
}

export const WBigSlider: React.FC<IWBigSliderProps> = ({
  items,
  renderItem,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  // const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full relative group rounded-lg">
      <Carousel
        setApi={setApi}
        opts={{ watchDrag: true }}
        className="w-full rounded-lg"
      >
        <CarouselContent className="flex w-full rounded-lg">
          {Array.from({ length: items }).map((_, index) => (
            <CarouselItem key={index} className="w-full shrink-0 rounded-lg">
              <div className="w-full flex items-center justify-center rounded-lg">
                {renderItem ? (
                  renderItem(index)
                ) : (
                  <div className="p-6 w-full text-center rounded-lg">
                    Default {index + 1}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2 z-5 bg-transparent border-transparent hover:bg-transparent"
          icon={
            <Image
              src="/icons/chevron.svg"
              alt="chevron-left"
              width={24}
              height={24}
            />
          }
        />

        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2 z-5 bg-transparent border-transparent hover:bg-transparent"
          icon={
            <Image
              src="/icons/chevron.svg"
              alt="chevron-right"
              className="rotate-180"
              width={24}
              height={24}
            />
          }
        />
      </Carousel>
      <div className="gap-1 inline-flex absolute left-1/2 -translate-x-1/2 bottom-4 z-10">
        {Array.from(Array(count).keys()).map((i) => (
          <button
            key={i}
            className={`mx-1 h-1 flex-grow rounded-full p-0 transition-all duration-300  ${
              i === current - 1
                ? 'bg-white hover:bg-white w-6'
                : 'bg-[#ffffff90] w-2'
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
};
