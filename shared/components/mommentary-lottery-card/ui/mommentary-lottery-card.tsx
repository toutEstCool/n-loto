import { MomentaryLotteriesType } from '@/sanity/schemaTypes/mommentaryLotteryType';
import { formatNumber } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  lottery: MomentaryLotteriesType;
}

export const MommentaryLotteryCard = ({ lottery }: Props) => {
  return (
    <div className="mb-6">
      <Image
        src={lottery.imageUrl}
        alt="lottery-1"
        width={1000}
        height={1000}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className="py-1 px-2 my-2 bg-[#efebe0] inline-flex gap-2 object-contain rounded-[8px] relative">
        <p
          className=" font-HavalMittel-regular
                            text-[16px] leading-5
                            xl:text-[18px] xl:leading-6
                          "
        >
          Билет • {formatNumber(lottery.ticketPrice)} ₽
        </p>
      </div>
      <h3
        className="mb-3 font-medium font-Acrom
                            text-[18px] leading-6
                            xl:text-[20px] xl:leading-6
                          "
      >
        {lottery.title}
      </h3>
      <p
        className="font-HavalMittel-regular
                            text-[14px] leading-4
                            xl:text-[16px] xl:leading-5
                          "
      >
        Главный приз {formatNumber(+lottery.mainPrize)} ₽
      </p>
    </div>
  );
};
