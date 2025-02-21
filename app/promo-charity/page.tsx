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
          className="bg-[url(/images/promo_charity-bg.jpg)] h-[320px] bg-contain bg-center flex flex-col text-white
          pt-10 pb-8 pl-5 rounded-[16px]
        
        "
        >
          <div className="max-w-[470px] h-full   flex flex-col justify-between">
            <h1 className="text-[32px] leading-8 font-Acrom font-bold">
              ИГРАЯ В ЛОТЕРЕИ, <br />
              ВЫ ПОМОГАЕТЕ ЛЮДЯМ
            </h1>
            <p className="mb-2 text-[16px] leading-5 font-HavalMittel-regular">
              Часть денег с проданных билетов идёт на благотворительные проекты
              по всей России.
            </p>
            <button className="max-w-[160px] text-[#2f41b0] text-[20px] leading-6 font-HavalMittel-medium border-white border px-5 py-3 bg-white rounded-[12px]">
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
