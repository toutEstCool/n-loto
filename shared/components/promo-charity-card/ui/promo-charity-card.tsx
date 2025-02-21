import Image from 'next/image';
import React from 'react';

interface Props {
  charity: {
    date: string;
    title: string;
    description: string[];
    image: string;
    price: string;
  };
}

export const PromoCharityCard = ({ charity }) => {
  return (
    <div className="bg-white p-8 rounded-[20px] flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <div className="max-w-[780px] h-full">
          <h3 className="text-[22px] leading-6 font-HavalMittel-bold text-[#364059]">
            «Национальная Лотерея» рассказала изданию «Аргументы и факты» о
            благотворительных тиражах «Мечталлион»
          </h3>
          <div
            className="max-h-[145px] mt-5 flex flex-col gap-[18px]
                    text-[16px] leading-5 font-HavalMittel-regular overflow-hidden text-[#5e6976]
                  "
          >
            <p>
              Сегодня одним из способов поддержать социально значимые инициативы
              является участие в лотереях. Бренд «Национальная Лотерея»
              рассказал изданию «Аргументы и факты» о промежуточных итогах
              благотворительных январских тиражей «Мечталлион».
            </p>
            <p>
              Сегодня одним из способов поддержать социально значимые инициативы
              является участие в лотереях. Бренд «Национальная Лотерея»
              рассказал изданию «Аргументы и факты» о промежуточных итогах
              благотворительных январских тиражей «Мечталлион».
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-col justify-between max-w-[314px]">
          <p className="text-[#5e6976] text-[20px] leading-5 font-HavalMittel-bold text-end">
            04 июня • 2024 г.
          </p>
          <div className="w-[314px] p-3 rounded-[12px] bg-[#efebe0] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/palm.svg"
                alt="promo_charity-card"
                width={40}
                height={40}
              />
              <p className="text-[#5e6976] text-[20px] leading-5 font-HavalMittel-bold">
                12 добрых дел
              </p>
            </div>
            <button
              className="  border-2 border-[#2f41b0] rounded-[12px] py-3 px-5
                    text-[#2f41b0] text-[20px] leading-6 font-HavalMittel-medium
                  "
            >
              Купить билет • 200 ₽
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/images/promo_charity-banner.png"
        alt="promo_charity-card"
        width={1000}
        height={1000}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
