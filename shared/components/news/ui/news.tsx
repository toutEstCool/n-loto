import { getNews } from '@/sanity/lib/sanity';
import { NewsType } from '@/sanity/schemaTypes/newsPostType';
import React, { useEffect } from 'react';
import { NewsCard } from '../../news-card';

export const News = () => {
  const [winners, setWinners] = React.useState<NewsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const winners = await getNews();
      setWinners(winners);
    };

    fetchData();
  }, []);
  return (
    <div className="w-full bg-white mt-16 rounded-[20px] p-6 relative pb-[84px] xl:pb-6 flex flex-col gap-8">
      <div className="flex justify-between items-center ">
        <h2
          className="font-bold text-[#364059]
          text-[28px] leading-[32px]
          md:text-[36px] md:leading-[42px]
        "
        >
          Новости
        </h2>
        <button className="hidden md:block border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
          Все новости
        </button>
      </div>

      <div className="flex gap-6 overflow-auto h-[284px] xl:h-auto xl:overflow-visible">
        {winners.map((winner) => (
          <NewsCard key={winner._id} winner={winner} />
        ))}
      </div>

      <button className="md:hidden border-2 border-[#1f48d8] bg-white py-3 px-5 text-[#1f48d8] rounded-[12px] text-[20px] leading-6 font-medium">
        Все новости
      </button>
    </div>
  );
};
