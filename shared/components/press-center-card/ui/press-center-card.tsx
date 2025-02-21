import { NewsType } from '@/sanity/schemaTypes/newsPostType';
import { cn } from '@/shared/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  news: NewsType;
  showBorder?: boolean;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const PressCenterCard = ({ news, showBorder }: Props) => {
  return (
    <div
      className={cn('pb-6 flex flex-col gap-4', {
        'border-b border-[#e7dec5]': showBorder,
      })}
    >
      <div>
        <Image
          src={news.image}
          alt={news.newsTitle}
          width={1000}
          height={1000}
          className={cn(
            'rounded-[12px] max-h-[360px] min-h-[360px] md:max-h-[248px] md:min-h-[248px] xl:max-h-[196px] xl:min-h-[196px]',
            {
              'xl:max-h-[313px] xl:min-h-[313px]': showBorder,
            },
          )}
          style={{
            width: '100%',
            objectFit: 'cover',
            height: '100%',
          }}
        />
        <p
          className="text-[#5e6976] font-HavalMittel-regular
          text-[18px] leading-6
          xl:text-[20px]
        "
        >
          {formatDate(news.drawDate)}
        </p>
      </div>
      <h3
        className="text-[#364059] font-HavalMittel-bold
        text-[24px] leading-8
        xl:text-[28px]
      "
      >
        {news.newsTitle}
      </h3>
      <Link
        href={`press-center/${news._id}`}
        className="flex gap-2 text-[#1f48d8] font-HavalMittel-regular
          text-[18px] leading-6
          xl:text-[20px]
        "
      >
        Читать <ArrowRight />
      </Link>
    </div>
  );
};
