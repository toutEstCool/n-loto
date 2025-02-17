import Image from 'next/image';
import React from 'react';

export const LotteryTicketCard = () => {
  return (
    <div className="relative flex p-4 bg-white xl:max-w-[700px] max-h-[313px] w-full h-full rounded-[10px] ">
      <div className=" w-[71%] relative overflow-hidden rounded-l-xl">
        <Image
          src="/images/color-balls.png"
          alt="Card Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>

      <div className="absolute left-[72%] h-full flex flex-col gap-2 justify-between">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-[3px] h-2 bg-[#0001] mx-auto ml-2"></div>
        ))}
      </div>

      <div className="bg-[#F2F4FF] absolute -top-2 left-[72%] w-4 h-4 rounded-full"></div>
      <div className="bg-[#F2F4FF] absolute -bottom-2 left-[72%] w-4 h-4 rounded-full"></div>

      <div className="w-[25%] h-[100%] ml-auto text-end text-lg font-bold flex flex-col gap-10 justify-between text-[#364059]">
        <div className="font-Acrom font-bold text-[18px] leading-6">
          <p className="">
            Тираж <br /> № 000127
          </p>
          <p className="">23.02.2025</p>
        </div>
        <div className="">
          <p
            className="font-HavalMittel-regular
            text-[28px] leading-8 
            xl:text-[28px] xl:leading-[52px] 
          "
          >
            100 ₽
          </p>
          <p
            className="w-full border-y-[2px] border-[#364059] ml-auto uppercase font-HavalMittel-regular
            max-w-[80px] text-[24px] leading-[32px]
            xl:max-w-[100px] xl:text-[28px] xl:leading-[35px]
          "
          >
            купить
          </p>
        </div>
      </div>
    </div>
  );
};
