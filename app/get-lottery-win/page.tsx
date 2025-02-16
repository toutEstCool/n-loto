import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import React from 'react';

const GetLotteryWin = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Как получить выигрыш', href: '/get-lottery-win' },
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
        <h1 className="text-4xl font-bold font-HavalMittel">
          Как получить выигрыш
        </h1>
      </Container>

      <Container>
        <div className="max-w-[1050px] w-full flex flex-col items-start gap-6">
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-1 w-full h-[448px] justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] leading-8 font-medium font-HavalMittel mb-1">
                Браво! Расскажите, как это было, а мы подскажем, как получить
                выигрыш.
              </h2>
              <p className="text-[24px] leading-8 font-normal font-HavalMittel">
                Давайте начнем. Где вы купили билет?
              </p>
              <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                Всех наших партнеров вы можете найти{' '}
                <a
                  className="text-[inherit] leading-[inherit] text-[#0000EE] font-[inherit]"
                  href=""
                >
                  на карте ниже.
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-[530px]">
              <button className="w-full border-2 border-[#1f48d8] py-3 px-5 text-[#1f48d8] rounded-[12px] font-HavalMittel text-[20px] leading-6 font-medium">
                На сайте или в приложении
              </button>
              <button className="w-full border-2 border-[#1f48d8] py-3 px-5 text-[#1f48d8] rounded-[12px] font-HavalMittel text-[20px] leading-6 font-medium">
                У наших партнеров или в клиентском офисе
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-6 w-full mb-16">
            <h2 className="text-[24px] leading-8 font-bold font-HavalMittel">
              Карта получения выигрышей
            </h2>
            <button className="max-w-[182px] border-2 border-[#1b2c92] bg-[#1b2c92] py-3 px-5 rounded-[12px]">
              <span className="text-[20px] leading-6 font-medium font-HavalMittel text-white">
                Показать карту
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetLotteryWin;
