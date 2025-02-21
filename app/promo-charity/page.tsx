import { getPromoCharity } from '@/sanity/lib/sanity';
import { PromoCharityType } from '@/sanity/schemaTypes/PromoCharityType';
import { PromoCharityCard } from '@/shared/components/promo-charity-card';
import { Container } from '@/widgets/container';
import React from 'react';

const PromoCharity = async () => {
  const charity: PromoCharityType[] = await getPromoCharity();

  return (
    <div className="mt-[70px] sm:mt-[88px] md:mt-[116px] min-h-screen relative mb-16 xl:mb-0">
      <Container>
        <div
          className="bg-[url(/images/promo_charity-bg.jpg)] h-[320px] bg-cover bg-center flex flex-col text-white
          pt-10 pb-8 pl-5 rounded-[16px]
        
        "
        >
          <div className="max-w-[470px] h-full   flex flex-col justify-between">
            <h1
              className="font-Acrom font-bold
              text-[32px] leading-8 w-[294px]
              md:text-[32px] md:leading-8 md:w-full
            "
            >
              ИГРАЯ В ЛОТЕРЕИ, <br />
              ВЫ ПОМОГАЕТЕ ЛЮДЯМ
            </h1>
            <p
              className="mb-2 font-HavalMittel-regular
              text-[14px] leading-4
              xl:text-[16px] xl:leading-5
            "
            >
              Часть денег с проданных билетов идёт на благотворительные проекты
              по всей России.
            </p>
            <button
              className="max-w-[160px] text-[#2f41b0] font-HavalMittel-medium border-white border bg-white rounded-[12px]
              p-2 text-[20px] leading-6
              md:px-5 md:py-3
            "
            >
              Хочу помочь
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          {charity.map((charity) => (
            <PromoCharityCard key={charity._id} charity={charity} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PromoCharity;
