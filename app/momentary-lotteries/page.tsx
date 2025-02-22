'use client';

import { getMomentaryLotteries } from '@/sanity/lib/sanity';
import { MomentaryLotteriesType } from '@/sanity/schemaTypes/mommentaryLotteryType';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { MommentaryLotteryCard } from '@/shared/components/mommentary-lottery-card';
import { WhereBuyMap } from '@/shared/components/where-buy-map';
import { cn } from '@/shared/lib/utils';
import { Container } from '@/widgets/container';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MomentaryLotteries = () => {
  const [lotteries, setLotteries] = useState<MomentaryLotteriesType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const lotteries = await getMomentaryLotteries();
      setLotteries(lotteries);
    };

    fetchData();
  }, []);

  const breadcrumbItems = [
    { label: 'текст ', href: '/' },
    { label: 'текст текст текст', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage:
            'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
        }}
        className="w-full  absolute top-0 left-0 -z-[1]
        bg-cover h-[345px] bg-[-75%_0%]
        sm:bg-[center]
        xl:h-[380px]
        "
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs variant="white" items={breadcrumbItems} />
        <h1
          className="font-Acrom 
            text-[24px] leading-8 font-medium
            md:text-[28px] md:leading-8 md:font-medium
            xl:text-4xl xl:font-bold
          "
        >
          текст текст текст
        </h1>
      </Container>
      <Container>
        <div className="xl:max-w-[912px] 2xl:max-w-[1050px] w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-6">
            <div className="w-full flex flex-col gap-4 md:flex-row md:gap-6">
              <div
                className="max-w-[562px] w-full bg-white rounded-[20px] flex flex-col items-start justify-center
                p-4 
                md:p-6 md:h-[332px]
                xl:p-8
              "
              >
                <div className="md:flex md:gap-4 xl:block xl:gap-0">
                  <Image
                    src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                    alt="ticket"
                    width={48}
                    height={48}
                    className="hidden rounded-[12px] md:block md:mb-3"
                  />
                  <h3 className="mb-4 text-[24px] leading-8 font-bold font-Acrom">
                    текст текст текст текст текст текст
                  </h3>
                </div>
                <p
                  className=" font-HavalMittel-regular
                  text-[18px] leading-6 font-normal
                  xl:text-[20px] xl:leading-6 xl:font-normal
                "
                >
                  текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст
                </p>
              </div>
              <div
                className="max-w-[464px] w-full bg-white rounded-[20px]
                p-4 
                md:p-6 
                xl:p-8
              "
              >
                <p
                  className="mb-6 font-HavalMittel-regular text-[#5e6976]
                  text-[18px] leading-6 font-normal w-[280px]
                  xl:text-[20px] xl:leading-6 xl:font-normal xl:w-full
                "
                >
                  текст текст текст текст текст текст
                </p>
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                    alt="russian-mail-post"
                    className="rounded-[12px]"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4
                      className="font-HavalMittel-bold
                      text-[18px] leading-6 
                      xl:text-[20px] xl:leading-6 
                      "
                    >
                      текст текст текст
                    </h4>
                    <p
                      className="text-[#5e6976] font-HavalMittel-regular
                      text-[14px] leading-4 
                      xl:text-[16px] xl:leading-5 
                      "
                    >
                      текст текст текст
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                    alt="russian-mail-post"
                    className="rounded-[12px]"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4
                      className="font-HavalMittel-bold
                      text-[18px] leading-6 
                      xl:text-[20px] xl:leading-6 
                      "
                    >
                      текст текст текст
                    </h4>
                    <p
                      className="text-[#5e6976] font-HavalMittel-regular
                      text-[14px] leading-4 
                      xl:text-[16px] xl:leading-5 
                      "
                    >
                      текст текст текст
                    </p>
                  </div>
                </div>
                <p
                  className="text-[#024cf8] font-HavalMittel-regular leading-6
                text-[18px]
                md:text-[20px]
                "
                >
                  текст текст текст
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white pb-2 rounded-[20px] flex flex-col gap-4
            p-4 
            md:p-6 
            xl:p-8
          "
          >
            <h2
              className="font-HavalMittel-bold text-[#364059]
              text-[18px] leading-6
              md:text-[24px] md:leading-8
              xl:text-[28px]
            "
            >
              текст текст текст
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:max-w-[1010px] xl:max-w-[912px] w-full gap-x-6">
              {lotteries.map((lottery, index) => (
                <Link href={`/momentary-lotteries/${index}`} key={index}>
                  <MommentaryLotteryCard lottery={lottery} />
                </Link>
              ))}
            </div>
          </div>
          <WhereBuyMap
            title="текст текст текст"
            hideBtnText="текст текст"
            showBtnText="текст текст"
          />

          <div
            className=" bg-white rounded-[20px]
            p-4 
            md:p-6 
            xl:p-8
          "
          >
            <div
              className="cursor-pointer bg-[#f0ead8] p-3 md:p-6 flex justify-between items-center rounded-[12px]"
              onClick={toggleOpen}
            >
              <h2
                className="font-[500] font-Acrom
                text-[18px] leading-6
                md:text-[24px] md:leading-8 
                xl:text-[28px] 
              "
              >
                текст текст текст
              </h2>
              <div
                className={`w-[44px] h-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer`}
              >
                <ChevronDown
                  stroke="#000"
                  className={cn('transition-all duration-300', {
                    'transform rotate-180': isOpen,
                  })}
                />
              </div>
            </div>
            {isOpen && (
              <p
                className="font-HavalMittel-medium text-[#5e6976]
                pt-4 pl-4 pb-2 max-w-[734px] w-full text-[14px] leading-5
                md:text-[16px] md:leading-5
              "
              >
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст{' '}
                <span className="text-[#024cf8]">«текст текст текст»</span>
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MomentaryLotteries;
