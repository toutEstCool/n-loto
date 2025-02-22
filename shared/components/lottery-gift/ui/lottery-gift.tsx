import React from 'react';

export const LotteryGift = () => {
  const originalBg = `
        bg-[url(/images/lottery-gift-small.jpg)]
        md:bg-[url(https://image.nloto.ru/online-meta/1de1c3fb-2f6a-4026-a290-a869d81cc00b.jpg)]
        xl:bg-[url(/images/lottery-gift.jpg)]`;

  const isOriginal = false;
  const pickBg = isOriginal
    ? originalBg
    : `
        bg-[url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)]
        md:bg-[url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)]
        xl:bg-[url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)]
        `;

  return (
    <div
      className={`mt-16 relative h-[377px] md:h-[215px] xl:h-[295px] rounded-[20px]
      ${pickBg}
      `}
      style={{
        backgroundSize: '100% 100%',
      }}
    >
      <button className="rounded-[12px] py-[10px] px-[20px] bg-white absolute bottom-6 left-[85px] text-[#59205b] text-[20px] leading-6 font-medium hover:text-white hover:bg-[#59205b] transition-[.3s]">
        Текст, Текст,
      </button>
    </div>
  );
};
