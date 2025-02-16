import Image from 'next/image';
import React from 'react';

export const WinningsRecentCard = () => {
  return (
    <div className="bg-white p-4 rounded-[32px]">
      <div className="flex gap-3 mb-3">
        <Image src="/icons/palm.svg" alt="palm" width={44} height={44} />
        <div>
          <h3
            className="text-[#364059] font-HavalMittel-bold
            text-[18px] leading-6
            xl:text-[22px] xl:leading-7
          "
          >
            12 добрых дел
          </h3>
          <p
            className="text-[#5e6976] font-HavalMittel-regular
            text-[16px] leading-5
            xl:text-[18px] xl:leading-6
          "
          >
            14 февр., 12:03 • Тираж № 001195
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
          118 000 000 ₽
        </p>
      </div>
    </div>
  );
};
