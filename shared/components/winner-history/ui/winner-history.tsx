import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Image from 'next/image';
import { HeroWinnerCard } from '../../hero-winner-card';
import { getWinners } from '@/sanity/lib/sanity';
import { WinnersType } from '@/sanity/schemaTypes/winnersType';
import Link from 'next/link';

export const WinnerHistory = () => {
  const [winners, setWinners] = React.useState<WinnersType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const winners = await getWinners();
      setWinners(winners);
    };

    fetchData();
  }, []);
  return (
    <div className="w-full bg-white mt-16 rounded-[20px] p-6 relative xl:pb-[84px] flex flex-col gap-8">
      <div className="flex justify-between items-center ">
        <h2
          className="font-bold font-Acrom text-[#364059]
          text-[24px] leading-[32px]
          md:text-[28px]
          xl:text-[36px] xl:leading-[42px]
        "
        >
          Текст, Текст, Текст, Текст,
        </h2>
        <Link href="/winnings">
          <button
            className="hidden md:block border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px]  
          text-[18px] leading-6 font-medium font-HavalMittel-medium
          xl:text-[20px]
          "
          >
            Текст, Текст,
          </button>
        </Link>
      </div>
      <Carousel
        className=""
        opts={{
          containScroll: 'trimSnaps',
          slidesToScroll: 1,
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {winners.map((winner) => (
            <CarouselItem
              key={winner._id}
              className="basis-1/1 max-w-[270px] w-full xl:max-w-[1000px] md:basis-1/2 xl:basis-1/5"
            >
              <HeroWinnerCard winner={winner} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-[48%] -translate-x-[50%] -bottom-[40px] hidden xl:flex xl:gap-[400px]">
          <CarouselPrevious
            className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8] bg-[#efebe0] "
            icon={
              <Image
                src="/icons/big-arrow.svg"
                alt="left"
                className="rotate-[180deg]"
                width={24}
                height={24}
              />
            }
          />
        </div>
        <div className="absolute left-[52%] -translate-x-[50%] -bottom-[40px] hidden xl:flex xl:gap-[400px]">
          <CarouselNext
            className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8] bg-[#efebe0]"
            icon={
              <Image
                src="/icons/big-arrow.svg"
                alt="left"
                width={24}
                height={24}
              />
            }
          />
        </div>
      </Carousel>

      <button className="md:hidden text-[20px] leading-6 px-5 py-3 rounded-[12px] font-HavalMittel-medium text-white bg-[#2f41b0]">
        Больше победителей
      </button>
    </div>
  );
};
