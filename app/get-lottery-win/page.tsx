import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import React from 'react';

const GetLotteryWin = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Как получить выигрыш', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/check_win-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[450px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs variant="white" items={breadcrumbItems} />
        <h1
          className="font-bold font-Acrom
          text-[24px] leading-8
          md:text-[28px]
          xl:text-[36px] xl:leading-[42px]
        "
        >
          Как получить выигрыш
        </h1>
      </Container>

      <Container>
        <div className="max-w-[1050px] w-full flex flex-col items-start gap-6">
          <div
            className="bg-white rounded-[20px] flex flex-col gap-1 w-full justify-between
            p-4 h-[432px]
            md:p-6 md:h-[448px]
            xl:p-8
          "
          >
            <div className="flex flex-col gap-2 md:gap-3">
              <h2
                className="font-HavalMittel-medium text-[#364059]
                text-[24px] leading-8
                xl:text-[28px] md:mb-1
              "
              >
                Браво! Расскажите, как это было, а мы подскажем, как получить
                выигрыш.
              </h2>
              <p
                className="font-HavalMittel-regular text-[#364059]
                text-[20px] leading-6
                xl:text-[24px] xl:leading-8
              "
              >
                Давайте начнем. Где вы купили билет?
              </p>
              <p
                className="text-[#364059] font-HavalMittel-regular
                text-[18px] leading-6
                xl:text-[20px]
              "
              >
                Всех наших партнеров вы можете найти{' '}
                <a className="text-[#024cf8]" href="">
                  на карте ниже.
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[392px] xl:max-w-[530px]">
              <button
                className="w-full border-2 border-[#024cf8] py-3 px-5 text-[#024cf8] rounded-[12px] font-HavalMittel-medium
                text-[18px] leading-6
                xl:text-[20px] xl:leading-6
                "
              >
                На сайте или в приложении
              </button>
              <button
                className="w-full border-2 border-[#024cf8] py-3 px-5 text-[#024cf8] rounded-[12px] font-HavalMittel-medium
                text-[18px] leading-6
                xl:text-[20px] xl:leading-6
              "
              >
                У наших партнеров или в клиентском офисе
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4 md:p-6 xl:p-8 flex flex-col gap-4 md:gap-6 w-full mb-16">
            <h2
              className="font-HavalMittel-bold text-[#364059]
              text-[20px] leading-6
              xl:text-[24px] xl:leading-8
            "
            >
              Карта получения выигрышей
            </h2>
            <button className=" border-2 border-[#1b2c92] bg-[#1b2c92] py-3 px-5 rounded-[12px]">
              <span
                className="font-HavalMittel-medium text-white
                text-[18px] leading-6 max-w-[168px]
                xl:text-[20px] xl:leading-6 xl:max-w-[182px]
              "
              >
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
