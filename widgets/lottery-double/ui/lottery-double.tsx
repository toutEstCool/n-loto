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
import React from 'react';

export const LotteryDouble = () => {
  return (
    <div className="w-full border-[3px] p-6 border-[#2f46b0] rounded-[20px] bg-white flex mt-16">
      <div className="max-w-[260px] mr-[24px] w-full flex flex-col gap-2">
        <h2 className="text-[28px] leading-8 text-[#2f46b0] font-bold">
          РАЗ, ДВА, ИГРА!
        </h2>
        <p className="text-xl leading-6">
          Ближайшие тиражи — успей купить в 2 клика.
        </p>
      </div>
      <div className="px-6 mx-3 max-w-[766px]">
        <div>
          <Carousel className=" ">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/2"
                >
                  <LotteryCountCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-[#1d154f] w-[32px] h-[32px] border-[#0071F4]" />
            <CarouselNext className="text-[#1d154f] w-[32px] h-[32px] border-[#0071F4]" />
          </Carousel>
        </div>
      </div>
      <div className="max-w-[260px] ml-auto w-full bg-[#e4d9b9] p-3 rounded-[10px] flex flex-col items-center">
        <div className="h-[60px] flex flex-col items-center justify-center">
          <p className="leading-6 text-[20px]">билеты не выбраны</p>
        </div>
        <div className="w-full flex items-center gap-2 h-[48px]">
          <Button className="w-full bg-[#2f41b0] rounded-xl hover:bg-[#2a399e] h-full">
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
