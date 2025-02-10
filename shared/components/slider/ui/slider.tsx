import { FC, memo, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Carousel } from "@/shared/ui/carousel";
import { TopSliderCard } from "../../top-slider-card";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, duration: 3000 });

  useEffect(() => {
    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    const interval = setInterval(autoplay, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="h-full max-w-[946px] overflow-hidden" ref={emblaRef}>
      <Carousel className="flex items-center gap-3 sm:gap-6">
        {cards.map((card, index) => (
          <div key={index} className="w-[200px] sm:w-[460px] mr-1 shrink-0">
            <TopSliderCard {...card} />
          </div>
        ))}
      </Carousel>
    </div>
  );
});


Slider.displayName = "Slider";