import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import React from 'react';

export const LotteryGift = () => {
  return (
    <div className="mt-16 relative h-[295px]">
      <Image
        src="/images/lottery-gift.jpg"
        alt="Gift"
        width={0}
        height={0}
        className="w-full h-full object-cover rounded-[20px] object-[0%] bg-[100%_100%]"
        style={{
          width: '100%',
          height: '100%',
        }}
        sizes="100vw"
      />
      <Button
        variant="ghost"
        className="rounded-[12px] py-[10px] px-[20px] bg-white absolute bottom-6 left-[85px] text-[#59205b] text-[20px] leading-6 font-medium hover:text-white hover:bg-[#59205b] transition-[.3s]"
      >
        подарить билет
      </Button>
    </div>
  );
};
