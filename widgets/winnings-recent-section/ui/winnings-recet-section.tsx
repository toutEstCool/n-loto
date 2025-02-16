import { WinningsRecentCard } from '@/shared/components/winnings-recent-card';
import React from 'react';

export const WinningsRecetSection = () => {
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
        <WinningsRecentCard />
        <WinningsRecentCard />
        <WinningsRecentCard />
        <WinningsRecentCard />
      </div>
    </div>
  );
};
