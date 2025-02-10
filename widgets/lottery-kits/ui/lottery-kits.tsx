'use client'

import { LotteryKitsCard } from "@/shared/components/lottery-kits-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel"

export const Lotterykits = () => {
  return (
    <div className="mt-[32px] sm:mt-16">
      <div className="bg-white rounded-[20px] p-4 sm:p-8">
        <div className="mb-[16px] sm:mb-8">
          <h2 className="text-[#364059] text-[24px] sm:text-[36px] font-bold leading-[42px]">Наборы лотерей</h2>
        </div>
        <div>
          {/* Тут будет слайдер  */}
          <Carousel className="">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                  <LotteryKitsCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-[50px] top-[-50px] hidden xl:flex">
              <CarouselPrevious className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8]" />
              <CarouselNext className="text-[#1d154f] w-[44px] h-[44px] border-[#1f48d8]" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}