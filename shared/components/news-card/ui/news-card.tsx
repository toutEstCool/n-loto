import { NewsType } from '@/sanity/schemaTypes/newsPostType';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  winner: NewsType;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const NewsCard = ({ winner }: Props) => {
  return (
    <div className="min-w-[300px] max-w-[300px] w-[300px] xl:w-full xl:max-w-[456px]">
      <Image
        src={
          false
            ? winner.image
            : 'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
        }
        alt="winner"
        width={1000}
        height={1000}
        className="rounded-[16px] max-h-[324px] md:max-h-[108px] xl:max-h-[127px]"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div className="flex flex-col gap-3">
        <p
          className="text-[#5e6976] font-HavalMittel-regular
                text-[18px] leading-6
                xl:text-[20px]
              "
        >
          {formatDate(winner.drawDate)}
        </p>
        <h3
          className="text-[#364059] font-HavalMittel-bold
                text-[20px] leading-6
                xl:text-[24px] xl:leading-8
              "
        >
          {/* {winner.newsTitle} */} текст текст текст текст текст текст
        </h3>
        <button className="flex gap-2 text-[#1f48d8] text-[20px] leading-6 font-normal">
          текст текст <ArrowRight width={14} height={14} />
        </button>
      </div>
    </div>
  );
};
