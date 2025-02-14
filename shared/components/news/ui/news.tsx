import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const News = () => {
  return (
    <div className="w-full bg-white mt-16 rounded-[20px] p-6 relative pb-[84px] flex flex-col gap-8">
      <div className="flex justify-between items-center ">
        <h2 className="text-[36px] leading-[42px] font-bold">Новости</h2>
        <button className="border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
          Все новости
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="max-w-[456px]" key={index}>
            <Image
              src="/images/news.png"
              alt="winner"
              width={1000}
              height={1000}
              className="rounded-[16px]"
              style={{
                width: '100%',
                height: '127px',
              }}
            />
            <div className="flex flex-col gap-3">
              <p className="text-[#5e6976] text-[20px] leading-6 font-normal">
                14 февраля, 2025 г.
              </p>
              <h3 className="text-[#364059] font-bold text-[24px] leading-8 font-HavalMittel">
                ДАРИТЕ ПОДАРКИ, О КОТОРЫХ МЕЧТАЮТ, С ЛОТЕРЕЕЙ «МЕЧТАЛЛИОН»
              </h3>
              <button className="flex gap-2 text-[#1f48d8] text-[20px] leading-6 font-normal">
                Читать <ArrowRight width={14} height={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
