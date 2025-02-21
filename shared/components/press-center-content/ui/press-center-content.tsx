'use client';

import { cn } from '@/shared/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PressCenterCard } from '../../press-center-card';
import { NewsType } from '@/sanity/schemaTypes/newsPostType';

interface Props {
  news: NewsType[];
}

export const PressCenterContent = ({ news }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get('tab') || 'news');

  useEffect(() => {
    const currentTab = searchParams.get('tab');
    if (currentTab) {
      setTab(currentTab);
    } else {
      router.push('/press-center?tab=news');
    }
  }, [router, searchParams]);

  const handleTabChange = (newTab: string) => {
    router.push(`/press-center?tab=${newTab}`);
    setTab(newTab);
  };
  return (
    <>
      <div className="flex gap-2">
        <button
          className={cn(
            'bg-white py-3 px-6 border-white border-2 text-[16px] leading-5 rounded-[12px] font-HavalMittel-medium',
            {
              'opacity-50': tab !== 'news',
            },
          )}
          onClick={() => handleTabChange('news')}
        >
          Новости
        </button>
        <button
          className={cn(
            'bg-white py-3 px-6 border-white border-2 text-[16px] leading-5 rounded-[12px] font-HavalMittel-medium',
            {
              'opacity-50': tab !== 'press-reliz',
            },
          )}
          onClick={() => handleTabChange('press-reliz')}
        >
          Пресс-релиз
        </button>
      </div>
      <div
        className={cn(
          'bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full',
          {
            'max-w-[1050px]': tab === 'news',
            'max-w-[1408px]': tab === 'press-reliz',
          },
        )}
      >
        <h2
          className="text-[#364059] font-bold font-Acrom
          text-[36px] leading-[42px]
          xl:text-[42px] xl:leading-[52px]
        "
        >
          {tab === 'news' ? 'НОВОСТИ' : 'Пресс-релизы'}
        </h2>
        <div
          className={cn('flex flex-col gap-8', {
            'grid grid-cols-1 xl:grid-cols-2 gap-6': tab === 'press-reliz',
          })}
        >
          {news.map((news) => (
            <PressCenterCard
              key={news._id}
              news={news}
              showBorder={tab == 'news'}
            />
          ))}
        </div>
      </div>
    </>
  );
};
