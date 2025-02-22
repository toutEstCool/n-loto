import { SpecialsType } from '@/sanity/schemaTypes/specialsType';
import { formatDate, truncateText } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  special: SpecialsType;
}

export const SpecialCard = ({ special }: Props) => {
  return (
    <div className="max-w-[432px] w-full flex flex-col gap-3 md:h-[483px]">
      <Image
        src={
          false
            ? special.imageUrl
            : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
        }
        alt=""
        width={1050}
        height={450}
        className="rounded-[12px] max-h-[144px] md:max-h-[153px] xl:max-h-[200px]"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div>
        <p
          className="font-HavalMittel-regular text-[#364059]
          text-[18px] leading-6
          xl:text-[20px]
        "
        >
          До {formatDate(special.startDate)}
        </p>
        <h3
          className="font-bold font-Acrom mt-2
          text-[18px] leading-6
        "
        >
          {/* {special.actionName} */}
          текст текст текст текст текст текст
        </h3>
      </div>
      <div className="mt-auto">
        <p
          className="font-HavalMittel-regular mb-1 text-[#364059]
          text-[16px] leading-5
          xl:text-[18px] xl:leading-6
        "
        >
          {truncateText(
            'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст ',
          )}
          <span className="text-[#024cf8] items-end">текст</span>
        </p>
        <button
          className="font-HavalMittel-bold border-2 border-[#2f41b0] w-full py-3 px-5 rounded-[12px] text-white bg-[#2f41b0] mt-2 
          text-[18px] leading-6
          md:max-w-[192px]
          xl:text-[20px]
        "
        >
          текст текст
        </button>
      </div>
    </div>
  );
};
