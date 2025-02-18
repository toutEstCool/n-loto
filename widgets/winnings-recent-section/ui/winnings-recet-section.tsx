'use client';

import { getRecentWins } from '@/sanity/lib/sanity';
import { RecentWinType } from '@/sanity/schemaTypes/recentWinType';
import { WinningsRecentCard } from '@/shared/components/winnings-recent-card';
import React, { useEffect } from 'react';

export const WinningsRecetSection = () => {
  const [winners, setWinners] = React.useState<RecentWinType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const winners = await getRecentWins();
      setWinners(winners);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2
        className="text-[#364059] mt-8 font-Acrom font-[900]
        text-[28px] leading-[32px]
        md:text-[36px] md:leading-[42px]
        xl:text-[42px] xl:leading-[52px]
      "
      >
        Недавние победы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {winners.map((winner) => (
          <WinningsRecentCard recentWin={winner} key={winner._id} />
        ))}
      </div>
    </div>
  );
};
