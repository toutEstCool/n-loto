import { LotteryCountCard } from '@/shared/components/lottery-count-card';
import { Button } from '@/shared/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { Gift } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const LotteryDouble = () => {
  return (
    <div
      className="w-full border-[3px] border-[#2f46b0] rounded-[20px] bg-white 
      p-6 flex 
      flex-col mt-6 
      xl:flex-row xl:mt-16
    "
    >
      <div className="xl:max-w-[260px] xl:mr-[24px] w-full flex flex-col gap-2 mb-4 xl:m-0">
        <h2 className="text-[24px] xl:text-[28px] leading-8 text-[#2f46b0] font-Acrom font-bold">
          РАЗ, ДВА, ИГРА!
        </h2>
        <p
          className="text-[#2f46b0] font-HavalMittel-regular
          text-[18px] leading-6
          xl:text-xl
        "
        >
          Ближайшие тиражи — успей купить в 2 клика.
        </p>
      </div>
      <div className="xl:px-6 xl:mx-3 xl:max-w-[766px]">
        <Carousel
          style={{ borderRadius: '0' }}
          className="!rounded-0 div:!rounded-0"
          opts={{
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: 'start',
          }}
        >
          <CarouselContent className="!rounded-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 xl:basis-1/2 !rounded-0 max-w-[298px] min-w-[183px] mr-3"
              >
                <LotteryCountCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden xl:block">
            <CarouselPrevious
              className="absolute left-[-40px] text-[#1d154f] w-[32px] h-[32px] border-[#0071F4]"
              icon={
                <Image
                  src="/icons/big-arrow.svg"
                  alt="left"
                  className="rotate-[180deg]"
                  width={20}
                  height={20}
                />
              }
            />
            <CarouselNext
              className="absolute right-[-40px] text-[#1d154f] w-[32px] h-[32px] border-[#0071F4]"
              icon={
                <Image
                  src="/icons/big-arrow.svg"
                  alt="left"
                  width={20}
                  height={20}
                />
              }
            />
          </div>
        </Carousel>
      </div>
      <div
        className="w-full bg-[#e4d9b9] p-3 rounded-[10px] flex flex-col gap-3 justify-between items-center mt-4
        md:flex-row
        xl:max-w-[260px] xl:ml-auto xl:flex-col xl:m-0
      "
      >
        <div className="xl:h-[60px] w-full xl:flex flex-col items-center justify-center">
          <p className="leading-6 text-[18px] xl:text-[20px] font-HavalMittel-regular text-center text-[#364059]">
            Билеты не выбраны
          </p>
        </div>
        <div className="w-full flex items-center gap-2 h-[48px]">
          <Button
            className="max-w-[252px] w-full xl:max-w-[700px] bg-[#2f41b0] rounded-xl hover:bg-[#2a399e] h-full
            text-[18px] leading-6 font-HavalMittel-medium
            xl:text-[20px]
          "
          >
            Оплатить
          </Button>
          <div className="max-w-[48px] w-full border-[2px] p-3 flex rounded-[10px] border-[#8b3a9a] cursor-pointer">
            <Gift width={20} height={20} color="#8b3a9a" fill="#0000" />
          </div>
        </div>
      </div>
    </div>
  );
};
