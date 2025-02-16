import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import Image from 'next/image';
import React from 'react';

const Winnings = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Победители', href: '/special' },
  ];

  return (
    <Container className="mt-[74px] sm:mt-[86px] min-h-screen ">
      <div>
        <div className="pt-3 mt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <h1 className="mt-8 text-[42px] leading-[52px] font-bold font-HavalMittel">
          Истории победителей
        </h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-[24px] max-w-[280px] w-full">
            <div className="mb-3 relative cursor-pointer group">
              <Image
                src="/images/winners.png"
                alt="winners"
                width={1000}
                height={1000}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#112d73] bg-opacity-50 group-hover:bg-[#112d73] flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300">
                <div className="w-11 h-11 bg-[#fff5] rounded-full flex items-center justify-center opacity-100 transform scale-100 group-hover:scale-150 transition-transform duration-300">
                  <Image
                    src="/icons/play.svg"
                    alt="play"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <h2 className="mb-1 text-[24px] leading-8 font-bold font-HavalMittel">
              Наталья
            </h2>
            <p className="mb-3 text-[16px] leading-5 font-normal font-HavalMittel">
              Волгоградская обл.
            </p>
            <div className="py-1.5 pr-3 pl-10 bg-[#efebe0] inline-flex gap-2 object-contain rounded-[8px] relative">
              <Image
                src="/icons/crown.png"
                alt="crown"
                width={16}
                height={16}
                className="absolute left-3 top-[50%] -translate-y-[50%]"
              />
              <p className="text-[#009a44] text-[20px] leading-6 font-bold font-HavalMittel">
                118 000 000 ₽
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/palm.svg"
                  alt="palm"
                  width={28}
                  height={28}
                />
                <p>Мечталлион</p>
              </div>

              <button className="rounded-[8px] py-1 px-3 border border-[#1f48d8] text-[#1f48d8] text-lg leading-6 font-normal font-HavalMittel">
                100 ₽
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-8 text-[42px] leading-[52px] font-bold font-HavalMittel">
            Недавние победы
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-[32px]">
              <div className="flex gap-3 mb-3">
                <Image
                  src="/icons/palm.svg"
                  alt="palm"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className="text-[22px] leading-7 font-bold font-HavalMittel">
                    12 добрых дел
                  </h3>
                  <p className="text-[18px] leading-6 font-normal font-HavalMittel">
                    14 февр., 12:03 • Тираж № 001195
                  </p>
                </div>
              </div>
              <div className="py-1.5 pr-3 pl-10 bg-[#efebe0] inline-flex gap-2 object-contain rounded-[8px] relative">
                <Image
                  src="/icons/crown.png"
                  alt="crown"
                  width={16}
                  height={16}
                  className="absolute left-3 top-[50%] -translate-y-[50%]"
                />
                <p className="text-[#009a44] text-[20px] leading-6 font-bold font-HavalMittel">
                  118 000 000 ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Winnings;
