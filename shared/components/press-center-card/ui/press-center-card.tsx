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
          className="rounded-[12px]"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <p className="text-[#5e6976] text-[20px] leading-6 font-HavalMittel-regular">
          {formatDate(news.drawDate)}
        </p>
      </div>
      <h3 className="text-[#364059] text-[28px] leading-8 font-HavalMittel-bold">
        {news.newsTitle}
      </h3>
      <Link
        href={`press-center/${news._id}`}
        className="flex gap-2 text-[#1f48d8] text-[20px] leading-6 font-HavalMittel-regular"
      >
        Читать <ArrowRight />
      </Link>
    </div>
  );
};
