import { WinnersType } from '@/sanity/schemaTypes/winnersType';
// import { formatNumber } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  winner: WinnersType;
}

export const HeroWinnerCard = ({ winner }: Props) => {
  return (
    <div className="bg-[#efebe0] p-4 rounded-[16px] mr-4">
      <div className="mb-3">
        <h3
          className="font-HavalMittel-medium text-[#364059]
          text-[20px] leading-6
          xl:text-2xl xl:leading-8
        "
        >
          {/* {winner.name} */}
          текст текст текст
        </h3>
        <p
          className="font-HavalMittel-regular text-[#36405990]
          text-[18px] leading-6
          xl:text-xl
        "
        >
          {/* {winner.region} */}
          текст текст текст
        </p>
      </div>
      <p className="mb-5 text-[32px] leading-8 text-[#8b3a9a] font-bold font-HavalMittel">
        {/* {formatNumber(+winner.amount)} ₽ */}
        текст текст
      </p>
      <div className="relative cursor-pointer group">
        <Image
          src={
            false
              ? winner.thumbnail
              : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
          }
          alt="winner"
          className="rounded-[12px]"
          width={1000}
          height={1000}
          style={{
            width: '100%',
            height: '127px',
          }}
        />
        <div className="rounded-[12px] absolute top-0 left-0 w-full h-full bg-[#112d73] bg-opacity-50 group-hover:bg-[#112d73] flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300">
          <div className="w-11 h-11 bg-[#fff5] rounded-full flex items-center justify-center opacity-100 transform scale-100 group-hover:scale-150 transition-transform duration-300">
            <Image src="/icons/play.svg" alt="play" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-2">
          <Image
            src={
              false
                ? winner.companyLogo
                : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
            }
            alt="palm"
            width={28}
            height={28}
          />
          <p>
            {/* {winner.company} */}
            текст
          </p>
        </div>

        <button
          className="text-[#1f48d8] py-1 px-3 border border-[#1f48d8] rounded-[20px]
          text-[16px] leading-5
          xl:text-[18px] xl:leading-6
        "
        >
          {/* {winner.price} ₽ */}
          текст
        </button>
      </div>
    </div>
  );
};
