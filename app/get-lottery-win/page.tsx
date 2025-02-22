import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { WhereBuyMap } from '@/shared/components/where-buy-map';
import { Container } from '@/widgets/container';
import React from 'react';

const GetLotteryWin = () => {
  const breadcrumbItems = [
    { label: 'текст текст ', href: '/' },
    { label: 'текст текст текст', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage:
            'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
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
          текст текст текст текст
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
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст
              </h2>
              <p
                className="font-HavalMittel-regular text-[#364059]
                text-[20px] leading-6
                xl:text-[24px] xl:leading-8
              "
              >
                текст текст текст текст текст текст текст
              </p>
              <p
                className="text-[#364059] font-HavalMittel-regular
                text-[18px] leading-6
                xl:text-[20px]
              "
              >
                текст текст текст текст текст текст{' '}
                <a className="text-[#024cf8]" href="">
                  текст текст текст
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
                текст текст текст
              </button>
              <button
                className="w-full border-2 border-[#024cf8] py-3 px-5 text-[#024cf8] rounded-[12px] font-HavalMittel-medium
                text-[18px] leading-6
                xl:text-[20px] xl:leading-6
              "
              >
                текст текст текст текст текст
              </button>
            </div>
          </div>

          <WhereBuyMap
            title="текст текст текст"
            showBtnText="текст текст"
            hideBtnText="текст текст"
          />
        </div>
      </Container>
    </div>
  );
};

export default GetLotteryWin;
