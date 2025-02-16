import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import Image from 'next/image';
import React from 'react';

const Special = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Акции', href: '/special' },
  ];

  return (
    <Container className="mt-[74px] sm:mt-[86px] min-h-screen ">
      <div className="pt-3 mt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="bg-[white] flex flex-col p-8 gap-8 rounded-[20px] mt-8">
        <h1 className="text-[42px] leading-[52px] font-medium font-HavalMittel">
          Акции
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              className="max-w-[432px] h-[483px] w-full flex flex-col gap-3"
              key={index}
            >
              <Image
                src="/images/special.jpg"
                alt=""
                width={1050}
                height={450}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div>
                <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                  До 9 марта 2025 года
                </p>
                <h3 className="text-[18px] leading-6 font-bold font-HavalMittel mt-2">
                  Дарите любимым «Мечталлион»
                </h3>
              </div>
              <div className="mt-auto">
                <p className="text-[18px] leading-6 font-bold font-HavalMittel mb-1">
                  С 14 февраля по 9 марта дарите 3 билета «Мечталлион» через
                  сервис «Подари билет» на сайте nloto.ru или приложение
                  «Национальная Лотерея» одной покупко... Подробнее
                </p>
                <button className="border-2 border-[#2f41b0] max-w-[192px] w-full py-3 px-5 rounded-[12px] text-[20px] leading-6 font-bold font-HavalMittel text-white bg-[#2f41b0] mt-2 ">
                  Перейти к акции
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Special;
