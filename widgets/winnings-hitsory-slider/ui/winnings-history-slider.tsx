'use client';

import React, { useEffect } from 'react';
import { WinningsHistoryCard } from '@/shared/components/winnings-history-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Image from 'next/image';
import { WinnersType } from '@/sanity/schemaTypes/winnersType';
import { getWinners } from '@/sanity/lib/sanity';

export const WinningsHistorySlider = () => {
  const [winners, setWinners] = React.useState<WinnersType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const winners = await getWinners();
      setWinners(winners);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2
        className="text-[#364059] mt-8 font-Acrom font-[900]
        text-[32px] leading-[32px]
        md:text-[36px] md:leading-[42px]
        xl:text-[42px] xl:leading-[52px]
      "
      >
        Истории
        <br className="xs:hidden" /> победителей
      </h2>
      <div className="my-6 xl:pb-[88px]">
        <Carousel
          className=""
          opts={{
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="">
            {winners.map((winner, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/2 xl:basis-1/4  md:max-w-[300px] xl:max-w-[280px] mr-4"
              >
                <WinningsHistoryCard winner={winner} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden xl:flex gap-4 items-center justify-center w-[108px] h-16 bg-[#fff] rounded-[24px] absolute -bottom-[88px] left-1/2 -translate-x-1/2 ">
            <div className="bg-[#2F41B0] w-8 h-8 rounded-[12px] relative">
              <CarouselPrevious
                className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-0 hover:bg-[#2F41B0]"
                icon={
                  <Image
                    src="/icons/chevron.svg"
                    alt="left"
                    width={16}
                    height={16}
                  />
                }
              />
            </div>
            <div className="bg-[#2F41B0] w-8 h-8 rounded-[12px] relative">
              <CarouselNext
                className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-0 hover:bg-[#2F41B0]"
                icon={
                  <Image
                    src="/icons/chevron.svg"
                    alt="left"
                    width={16}
                    height={16}
                    className="rotate-180"
                  />
                }
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
