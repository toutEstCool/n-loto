import React from 'react';

export const BannerNewMillioner = () => {
  return (
    <div
      className="mt-16 relative h-[445px] rounded-[20px] px-[81px] py-[42px] text-white"
      style={{
        backgroundImage: 'url(/images/banner-mln.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="uppercase text-[38px] leading-[42px] font-bold">
        <p>С каждым днем</p>
        <p>Все больше миллионеров</p>
      </div>

      <div className="uppercase flex items-center gap-2 mt-16">
        <p className="text-5xl">уже</p>
        <div className="border border-white p-1 rounded-[18px]">
          <p className="text-[80px] leading-[72px] font-HavalMittel">2218</p>
        </div>
      </div>
      <button className="rounded-[12px] py-[10px] px-[20px] bg-white absolute bottom-6 left-[50%] -translate-x-[50%] text-[#59205b] text-[20px] leading-6 font-medium hover:text-white hover:bg-[#59205b] transition-[.3s]">
        Недавние победы
      </button>
    </div>
  );
};
