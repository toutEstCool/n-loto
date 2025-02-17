import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const News = () => {
  return (
    <div className="w-full bg-white mt-16 rounded-[20px] p-6 relative pb-[84px] flex flex-col gap-8">
      <div className="flex justify-between items-center ">
        <h2
          className="font-bold text-[#364059]
          text-[28px] leading-[32px]
          md:text-[36px] md:leading-[42px]
        "
        >
          Новости
        </h2>
        <button className="hidden md:block border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
          Все новости
        </button>
      </div>

      <div className="flex gap-6 overflow-auto h-[284px] xl:h-[300px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="min-w-[300px] max-w-[300px] w-[300px] xl:w-full xl:max-w-[456px]"
            key={index}
          >
            <Image
              src="/images/news.png"
              alt="winner"
              width={1000}
              height={1000}
              className="rounded-[16px] max-h-[108px] xl:max-h-[127px]"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <div className="flex flex-col gap-3">
              <p
                className="text-[#5e6976] font-HavalMittel-regular
                text-[18px] leading-6
                xl:text-[20px]
              "
              >
                14 февраля, 2025 г.
              </p>
              <h3
                className="text-[#364059] font-HavalMittel-bold
                text-[20px] leading-6
                xl:text-[24px] xl:leading-8
              "
              >
                ДАРИТЕ ПОДАРКИ, О КОТОРЫХ МЕЧТАЮТ, С ЛОТЕРЕЕЙ «МЕЧТАЛЛИОН»
              </h3>
              <button className="flex gap-2 text-[#1f48d8] text-[20px] leading-6 font-normal">
                Читать <ArrowRight width={14} height={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="md:hidden border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
        Все новости
      </button>
    </div>
  );
};
