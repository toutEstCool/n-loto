import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/shared/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IWBigSliderProps {
  items: number;
  renderItem?: (index: number) => React.ReactNode;
}

export const WBigSlider: React.FC<IWBigSliderProps> = ({ items, renderItem }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
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
        {/* Контент слайдера */}
        <CarouselContent className="flex w-full rounded-lg">
          {Array.from({ length: items }).map((_, index) => (
            <CarouselItem key={index} className="w-full shrink-0 rounded-lg">
              <div className="w-full flex items-center justify-center rounded-lg">
                {renderItem ? renderItem(index) : (
                  <div className="p-6 w-full text-center rounded-lg">
                    Default {index + 1}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="z-0 absolute left-4 top-1/2 -translate-y-1/2 z-5 bg-transparent border-transparent"
          icon={
            <ChevronLeft className="z-0" />
          }
        />

        <CarouselNext
          className="z-0 absolute right-4 top-1/2 -translate-y-1/2 z-5 bg-transparent border-transparent"
          icon={
            <ChevronRight className="z-0" />
          }
        />
      </Carousel>
    </div>
  );
};
