import { LotteryTicketsType } from '@/sanity/schemaTypes/lotteryTicketsType';
import Image from 'next/image';
import React from 'react';

interface Props {
  ticket: LotteryTicketsType;
}

export const LotteryTicketCard = ({ ticket }: Props) => {
  return (
    <div
      className="relative flex flex-col p-4 bg-white xl:max-w-[700px] max-h-[313px] w-full h-full rounded-[10px] 
      md:flex-row
    "
    >
      <div className="md:w-[71%] relative overflow-hidden rounded-l-xl">
        <Image
          src={ticket.imageUrl}
          alt="Card Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
      <div className="hidden absolute left-[72%] h-full md:flex flex-col gap-2 justify-between">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-[3px] md:w-[3px] md:h-2 bg-[#0001] mx-auto md:ml-2"
          ></div>
        ))}
      </div>

      <div className="md:hidden absolute top-[60%] translate-y-[-40%] left-0 w-full flex gap-2 justify-between">
        {[...Array(17)].map((_, i) => (
          <div key={i} className="w-2 h-[3px] bg-[#0001] mx-auto ml-2"></div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="bg-[#F2F4FF] absolute -top-2 left-[72%] w-4 h-4 rounded-full"></div>
        <div className="bg-[#F2F4FF] absolute -bottom-2 left-[72%] w-4 h-4 rounded-full"></div>
      </div>
      <div className="md:hidden">
        <div className="bg-[#F2F4FF] absolute top-[60%] translate-y-[-40%] -left-2 w-4 h-4 rounded-full"></div>
        <div className="bg-[#F2F4FF] absolute top-[60%] translate-y-[-40%] -right-2 w-4 h-4 rounded-full"></div>
      </div>
      <div
        className="w-full ml-auto text-end text-lg font-bold flex gap-10 justify-between text-[#364059]
        h-[100%] 
        md:w-[25%] md:flex-col
      "
      >
        <div className="font-Acrom font-bold text-[18px] leading-6 mt-auto md:m-0 flex flex-col-reverse md:block">
          <p className="">
            Тираж <br /> № {ticket.drawNumber}
          </p>
          <p className="mt-0 xl:mt-4">
            {new Date(ticket.drawDate).toLocaleDateString()}
          </p>
        </div>
        <div className="mt-auto md:m-0">
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
