import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import { CircleHelp, HelpCircle, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CheckWin = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Проверка билета', href: '/about' },
  ];

  return (
    <div className="mt-[74px] sm:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/check_win-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[450px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-bold font-HavalMittel">Проверка билета</h1>
      </Container>

      <Container>
        <div className="max-w-[1050px] w-full flex flex-col items-start gap-6">
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-1  w-full">
            <h2 className="text-[28px] leading-8 font-medium font-HavalMittel mb-1">
              Проверить билет на сайте
            </h2>
            <div className="flex gap-2">
              <p>Номер билета</p>
              <div>
                <HelpCircle
                  width={20}
                  height={20}
                  fill="#CBD1DA"
                  stroke="#fff"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <input
                className="border border-[#b9c1cd] p-3 max-w-[481px] w-full rounded-[8px] text-[16px] leading-5 font-medium"
                type="text"
                name=""
                id=""
              />
              <button className="border-2 border-[#2f41b0] bg-[#2f41b0] px-16 py-3 text-white font-HavalMittel rounded-[12px] text-[20px] leading-6 font-medium">
                Проверить
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-8 w-full">
            <h2 className="text-[28px] leading-8 font-medium font-HavalMittel">
              Проверить билет быстрее и проще по QR-коду
            </h2>
            <div className="relative">
              <Image
                src="/images/check_win-check-QR.png"
                alt="qr"
                width={1000}
                height={1000}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div
                className="absolute right-0 top-0 h-[auto] max-w-[432px]"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/check_win-check-QR2.png)',
                  backgroundSize: '100% 100%',
                }}
              >
                <div className="w-[80%] p-6 text-[#fff] flex flex-col justify-between h-[100%]">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-HavalMittel">
                      Скачать мобильное приложение
                    </h3>
                    <p>Сканируйте QR-код</p>
                    <Image
                      src="/icons/QR.svg"
                      alt="qr"
                      width={100}
                      height={100}
                    />
                  </div>
                  <ul className="flex flex-col gap-1">
                    {[
                      'Простая регистрация',
                      'Быстрая покупка и проверка билетов',
                      'Моментальный вывод выигрыша',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 ">
                        <Star
                          width={8}
                          height={8}
                          fill="#fff"
                          stroke="#fff"
                          className="rotate-[15deg] opacity-[0.8] mt-[5px]"
                        />
                        <p className="text-lg leading-6 font-HavalMittel text-[#fff90]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/images/check_win-banner.png)',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="p-11 max-w-[577px] w-full flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-white">
                <Image
                  src="/icons/mechtallion.svg"
                  alt="banner"
                  width={1000}
                  height={1000}
                  className="max-w-[246px] mb-2"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3 className="text-[28px] leading-8 font-normal font-HavalMittel">
                  Билеты онлайн
                </h3>
                <ul>
                  {[
                    'Результаты розыгрыша в личном кабинете',
                    'Моментальный вывод выигрыша на карту',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 ">
                      <Star
                        width={8}
                        height={8}
                        fill="#fff"
                        stroke="#fff"
                        className="rotate-[15deg] opacity-[0.8] mt-[5px]"
                      />
                      <p className="text-lg leading-6 font-HavalMittel text-[#fff90]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="py-3 px-5 border-2 border-white text-white text-[20px] leading-6 font-medium rounded-[12px]">
                Купить билет
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckWin;
