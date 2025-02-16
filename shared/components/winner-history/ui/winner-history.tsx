import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Image from 'next/image';

export const WinnerHistory = () => {
  return (
    <div className="w-full bg-white mt-16 rounded-[20px] p-6 relative pb-[84px] flex flex-col gap-8">
      <div className="flex justify-between items-center ">
        <h2 className="text-[36px] leading-[42px] font-bold">
          Истории наших победителей
        </h2>
        <button className="border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
          Больше победителей
        </button>
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
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="bg-[#efebe0] p-4 rounded-[16px] mr-4">
                <div className="mb-3">
                  <h3 className="text-2xl font-medium">Наталья</h3>
                  <p className="text-xl leading-6 font-normal">
                    Волгоградская обл.
                  </p>
                </div>
                <p className="mb-5 text-[32px] leading-8 text-[#8b3a9a] font-bold font-HavalMittel">
                  118 000 000 ₽
                </p>
                <div className="relative cursor-pointer group">
                  <Image
                    src="/images/winners.png"
                    alt="winner"
                    width={1000}
                    height={1000}
                    style={{
                      width: '100%',
                      height: '127px',
                    }}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#112d73] bg-opacity-50 group-hover:bg-[#112d73] flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300">
                    <div className="w-11 h-11 bg-[#fff5] rounded-full flex items-center justify-center opacity-100 transform scale-100 group-hover:scale-150 transition-transform duration-300">
                      <Image
                        src="/icons/play.svg"
                        alt="play"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-[126px]">
                  <div className="flex gap-2">
                    <Image
                      src="/icons/palm.svg"
                      alt="palm"
                      width={28}
                      height={28}
                    />
                    <p>Месталлион</p>
                  </div>

                  <button>100 ₽</button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-[48%] -translate-x-[50%] -bottom-[40px] hidden xl:flex xl:gap-[400px]">
          <CarouselPrevious className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8] bg-[#efebe0] " />
        </div>
        <div className="absolute left-[52%] -translate-x-[50%] -bottom-[40px] hidden xl:flex xl:gap-[400px]">
          <CarouselNext className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8] bg-[#efebe0]" />
        </div>
      </Carousel>
    </div>
  );
};
