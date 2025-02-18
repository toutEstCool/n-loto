import { RecentWinType } from '@/sanity/schemaTypes/recentWinType';
import { formatNumber } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  recentWin: RecentWinType;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });
  const formattedTime = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${formattedDate}, ${formattedTime}`;
};

export const WinningsRecentCard = ({ recentWin }: Props) => {
  return (
    <div className="bg-white p-4 rounded-[32px]">
      <div className="flex gap-3 mb-3">
        <Image src={recentWin.iconUrl} alt="palm" width={44} height={44} />
        <div>
          <h3
            className="text-[#364059] font-HavalMittel-bold
            text-[18px] leading-6
            xl:text-[22px] xl:leading-7
          "
          >
            {recentWin.recentWin}
          </h3>
          <p
            className="text-[#5e6976] font-HavalMittel-regular
            text-[16px] leading-5
            xl:text-[18px] xl:leading-6
          "
          >
            {formatDate(recentWin.date)} • Тираж № {recentWin.drawNumber}
          </p>
        </div>
      </div>
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
          xl:text-[20px] 
        "
        >
          {formatNumber(+recentWin.prizeAmount)} ₽
        </p>
      </div>
    </div>
  );
};
