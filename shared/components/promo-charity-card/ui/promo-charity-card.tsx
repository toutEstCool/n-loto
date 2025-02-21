'use client';

import { PromoCharityType } from '@/sanity/schemaTypes/PromoCharityType';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  charity: PromoCharityType;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export const PromoCharityCard = ({ charity }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[20px] flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <div className="max-w-[780px] h-full">
          <p
            className="text-[#5e6976] md:hidden
            text-[18px] leading-6 font-HavalMittel-medium
          "
          >
            {formatDate(charity.date)}
          </p>
          <h3
            className="font-HavalMittel-bold text-[#364059]
            text-[18px] leading-6
            xl:text-[22px]
          "
          >
            {charity.title}
          </h3>

          <div
            className={`md:mt-5 flex flex-col gap-[18px] font-HavalMittel-regular text-[#5e6976]
                text-[14px] leading-5
                xl:text-[16px]
              ${isExpanded ? '' : 'max-h-[145px] overflow-hidden'}`}
          >
            {charity.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {!isExpanded && (
            <button
              className="mt-3 text-[#024cf8] underline font-HavalMittel-bold
                text-[12px]
                md:text-[16px]
                xl:text-[18px]
              "
              onClick={() => setIsExpanded(true)}
            >
              Показать весь текст
            </button>
          )}
        </div>

        <div className="h-auto flex flex-col justify-between max-w-[314px]">
          <p
            className="text-[#5e6976] text-end hidden
            md:text-[18px] md:leading-6 md:min-w-[150px] md:font-HavalMittel-medium md:block
            xl:text-[20px] xl:leading-5 xl:font-HavalMittel-bold 
          "
          >
            {formatDate(charity.date)}
          </p>
          <div className="hidden w-[314px] p-3 rounded-[12px] bg-[#efebe0] xl:flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src={charity.companyLogo}
                alt="promo_charity-card"
                width={40}
                height={40}
                className="rounded-[12px]"
              />
              <p className="text-[#5e6976] text-[20px] leading-5 font-HavalMittel-bold">
                {charity.companyName}
              </p>
            </div>
            <button className="border-2 border-[#2f41b0] rounded-[12px] py-3 px-5 text-[#2f41b0] text-[20px] leading-6 font-HavalMittel-medium">
              Купить билет • {charity.ticketPrice} ₽
            </button>
          </div>
        </div>
      </div>

      <Image
        src={charity.bannerImage}
        alt="promo_charity-card"
        width={1000}
        height={1000}
        className="min-h-[180px] md:min-h-[360px] rounded-[12px]"
        style={{ width: '100%', height: '100%' }}
      />
      <div
        className="pt-6  border-t-[3px] max-w-[340px] flex items-center justify-between
        md:border-0 md:rounded-[16px] md:bg-[#efebe0] md:p-2
        xl:hidden
      "
      >
        <Image
          src={charity.companyLogo}
          alt="promo_charity-card"
          width={40}
          height={40}
          className="rounded-[12px]"
        />
        <p className="text-[#5e6976] text-[20px] leading-5 font-HavalMittel-bold">
          {charity.companyName}
        </p>
        <button className="md:hidden border-2 border-[#2f41b0] rounded-[12px] px-5 py-3 text-[#2f41b0] text-[18px] leading-6 font-HavalMittel-medium">
          Купить
        </button>
        <button className="hidden md:block md:h-[32px] border-2 border-[#2f41b0] rounded-[12px] p-1 text-[#2f41b0] text-[18px] leading-6 font-HavalMittel-medium">
          Купить • {charity.ticketPrice} ₽
        </button>
      </div>
    </div>
  );
};
