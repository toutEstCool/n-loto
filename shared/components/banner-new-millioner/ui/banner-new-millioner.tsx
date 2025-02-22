import Link from 'next/link';
import React from 'react';

export const BannerNewMillioner = () => {
  return (
    <div
      className="relative rounded-[20px] text-white
        bg-[url(https://image.nloto.ru/online-meta/57d0045e-1b67-45e2-bb78-51cc1cfd5a6b.jpg)]
        md:bg-[url(https://image.nloto.ru/online-meta/01c69051-f993-4f72-a0c9-2c85b5134073.jpg)]
        xl:bg-[url(/images/banner-mln.jpg)]

        px-[16px] py-[15px] mt-12 h-[397px] 
        md:h-[284px] md:px-[29px] md:py-[12px] 
        xl:px-[81px] xl:py-[42px] xl:h-[445px] xl:mt-16
      "
      style={{
        backgroundSize: 'cover',
      }}
    >
      <div
        className="uppercase font-bold font-Acrom
        text-[24px] leading-[26px]
        md:text-[30px] md:leading-[34px]
        xl:text-[38px] xl:leading-[42px]
      "
      >
        <p>С каждым днем</p>
        <p>Все больше миллионеров</p>
      </div>

      <div className="uppercase flex items-center gap-2 mt-12 xl:mt-16">
        <p className="text-[24px] xl:text-5xl font-HavalMittel-bold">уже</p>
        <div className="border border-white p-1 rounded-[18px]">
          <p className="text-[50px] leading-[45px] xl:text-[80px] xl:leading-[72px] font-Acrom font-bold">
            2218
          </p>
        </div>
      </div>
      <Link href="/winnings">
        <button className="rounded-[12px] p-2 md:py-[10px] md:px-[20px] bg-white absolute bottom-6 left-[50%] -translate-x-[50%] text-[#59205b] text-[18px] md:text-[20px] leading-6 font-medium hover:text-white hover:bg-[#59205b] transition-[.3s]">
          Недавние победы
        </button>
      </Link>
    </div>
  );
};
