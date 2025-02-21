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
          <h3 className="text-[22px] leading-6 font-HavalMittel-bold text-[#364059]">
            {charity.title}
          </h3>

          <div
            className={`mt-5 flex flex-col gap-[18px] text-[16px] leading-5 font-HavalMittel-regular text-[#5e6976] ${
              isExpanded ? '' : 'max-h-[145px] overflow-hidden'
            }`}
          >
            {charity.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {!isExpanded && (
            <button
              className="mt-3 text-[#024cf8] underline text-[18px] font-HavalMittel-bold"
              onClick={() => setIsExpanded(true)}
            >
              Показать весь текст
            </button>
          )}
        </div>

        <div className="h-auto flex flex-col justify-between max-w-[314px]">
          <p className="text-[#5e6976] text-[20px] leading-5 font-HavalMittel-bold text-end">
            {formatDate(charity.date)}
          </p>
          <div className="w-[314px] p-3 rounded-[12px] bg-[#efebe0] flex flex-col gap-3">
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
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
