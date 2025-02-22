import { WinnersType } from '@/sanity/schemaTypes/winnersType';
// import { formatNumber } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  winner: WinnersType;
}

export const WinningsHistoryCard = ({ winner }: Props) => {
  return (
    <div className="bg-white p-4 rounded-[24px] max-w-[280px] w-full">
      <div className="mb-3 relative cursor-pointer group">
        <Image
          src={
            false
              ? winner.thumbnail
              : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
          }
          alt="winners"
          width={1000}
          height={1000}
          className="rounded-[12px] max-h-[128px] md:max-h-[150px] xl:max-h-[140px]"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div className="rounded-[12px] absolute top-0 left-0 w-full h-full bg-[#112d73] bg-opacity-50 group-hover:bg-[#112d73] flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300">
          <div className="w-11 h-11 bg-[#fff5] rounded-full flex items-center justify-center opacity-100 transform scale-100 group-hover:scale-150 transition-transform duration-300">
            <Image src="/icons/play.svg" alt="play" width={24} height={24} />
          </div>
        </div>
      </div>
      <h2
        className="mb-1 font-HavalMittel-bold
        text-[20px] leading-6
        xl:text-[24px] xl:leading-8
      "
      >
        {/* {winner.name} */}
        текст текст
      </h2>
      <p
        className="mb-1 font-HavalMittel-regular text-[#5e6976]
        text-[14px] leading-4
        xl:text-[16px] xl:leading-5
      "
      >
        {/* {winner.region} */}
        текст текст текст текст текст
      </p>
      <div className="py-1.5 pr-3 pl-10 bg-[#efebe0] inline-flex gap-2 object-contain rounded-[8px] relative">
        <Image
          src="/icons/crown.png"
          alt="crown"
          width={16}
          height={16}
          className="absolute left-3 top-[50%] -translate-y-[50%]"
        />
        <p
          className="text-[#009a44] font-HavalMittel-bold 
          text-[18px] leading-6 
          xl:text-[20px] xl:leading-6 
        "
        >
          {/* {formatNumber(+winner.amount)} ₽ */}
          текст
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
          <Image
            src={
              false
                ? winner?.companyLogo
                : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
            }
            alt="palm"
            width={28}
            height={28}
          />
          <p
            className="font-HavalMittel-regular text-[#364059]
            text-[16px] leading-5
            xl:text-[18px] xl:leading-6
          "
          >
            {/* {winner.company} */}
            текст
          </p>
        </div>

        <button
          className="rounded-[8px] py-1 px-3 border border-[#1f48d8] text-[#1f48d8] font-HavalMittel-regular
          text-[16px] leading-5
          xl:text-[18px] xl:leading-6
        "
        >
          текст
        </button>
      </div>
    </div>
  );
};
