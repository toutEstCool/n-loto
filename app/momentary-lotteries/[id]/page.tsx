import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import Image from 'next/image';
import React from 'react';

const DetailMomentaryLotteries = () => {
  const breadcrumbItems = [
    { label: 'текст', href: '/' },
    { label: 'текст текст текст', href: '/get-lottery-win' },
    { label: 'текст текст текст', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16">
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
          className="font-Acrom 
            text-[24px] leading-8 font-medium
            md:text-[28px] md:leading-8 md:font-medium
            xl:text-4xl xl:font-bold
          "
        >
          текст текст текст текст текст текст
        </h1>
      </Container>
      <Container className="xl:flex items-start gap-6">
        <div className="max-w-[1050px] w-full flex flex-col gap-8">
          <div
            className="bg-white rounded-[20px] md:flex gap-6
            p-4 
            md:p-6
            xl:p-8"
          >
            <div className="hidden md:block">
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="ticket"
                className="rounded-[12px]"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="mt-11 flex flex-col gap-16">
              <div className="text-[#8b3a9a] flex flex-col gap-4">
                <div>
                  <p
                    className="font-HavalMittel-medium
                    text-[20px] leading-6
                    xl:text-[24px] xl:leading-8
                  "
                  >
                    текст текст текст
                  </p>
                  <p
                    className="font-HavalMittel-bold 
                    text-[38px] leading-[38px] 
                    md:text-[60px] md:leading-[60px] 
                  "
                  >
                    текст текст текст
                  </p>
                </div>
                <div>
                  <p
                    className="font-HavalMittel-medium
                    text-[20px] leading-6
                    xl:text-[24px] xl:leading-8
                  "
                  >
                    текст текст текст
                  </p>
                  <p
                    className="font-HavalMittel-bold 
                    text-[38px] leading-[38px] 
                    md:text-[60px] md:leading-[60px] 
                  "
                  >
                    текст текст текст
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="flex gap-2 items-center justify-center py-2 px-3 rounded-[4px] bg-[#8b3a9a]">
                  <Image
                    src="/icons/map_point.svg"
                    alt="point"
                    width={14}
                    height={14}
                  />
                  <span className="text-[16px] leading-[20px] font-normal font-HavalMittel text-white">
                    текст текст текст
                  </span>
                </button>
                <p className="text-[14px] leading-4 xl:text-[16px] xl:leading-[20px] font-normal font-HavalMittel text-[#024cf8]">
                  текст текст текст
                </p>
              </div>
            </div>
          </div>
          <div
            className=" bg-white rounded-[20px]
            p-4 
            md:p-6
            xl:p-8
          "
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] leading-8 font-HavalMittel-bold text-[text-[#364059]]">
                текст текст
              </h2>
              <div className="flex flex-col gap-4 text-[text-[#364059]]">
                <h2 className="text-[24px] leading-8 font-HavalMittel-bold ">
                  текст текст
                </h2>
                <div className="w-full xl:flex gap-6">
                  <div className="xl:w-[33.3333%] mt-4 mb-6 xl:m-0 flex flex-col md:flex-row xl:flex-col gap-6">
                    <Image
                      src="/images/detail_step-1.png"
                      alt="point"
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-medium">
                        текст текст
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        текст текст текст текст текст текст текст текст текст
                        текст текст текст
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-[33.3333%] mt-4 mb-6 md:m-0 flex flex-col md:flex-row xl:flex-col gap-6">
                    <Image
                      src="/images/detail_step-1.png"
                      alt="point"
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-medium">
                        текст текст текст
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        текст текст текст текст текст текст текст текст текст
                        текст текст текст
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] leading-8 font-HavalMittel-bold ">
                  текст текст
                </h2>
                <div className="w-full xl:flex gap-6">
                  <div className="xl:w-[33.3333%] mt-4 mb-6 md:m-0 flex flex-col md:flex-row xl:flex-col gap-6">
                    <Image
                      src="/images/detail_step-1.png"
                      alt="point"
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-medium">
                        текст текст
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        текст текст текст текст текст текст текст текст текст
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-[33.3333%] mt-4 mb-6 md:m-0 flex flex-col md:flex-row xl:flex-col gap-6">
                    <Image
                      src="/images/detail_step-1.png"
                      alt="point"
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-medium">
                        текст текст текст
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        текст текст текст текст текст текст текст текст текст
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-2 text-[28px] leading-8 font-bold font-HavalMittel text-[#364059]">
                текст текст
              </h2>
              <p
                className="text-[#5e6976]
                text-[16px] leading-5 font-HavalMittel-regular
                xl:text-[20px] xl:leading-6
              "
              >
                текст текст текст текст текст
              </p>

              <div className="md:flex gap-4 mt-6">
                <div
                  className="w-full flex text-[#929eab]
                  md:h-[88px] md:max-w-[112px] md:flex md:flex-col md:gap-2 md:justify-between
                "
                >
                  <p className="text-[14px] leading-4 md:text-[16px] md:leading-5 font-HavalMittel-regular">
                    текст текст
                  </p>
                  <p className="text-[14px] leading-4 md:text-[16px] md:leading-5 font-HavalMittel-regular">
                    текст текст
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:overflow-auto md:h-[127px]">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className="md:max-w-[112px] w-full md:h-[88px] bg-[#efebe0] rounded-[8px] md:rounded-[16px] flex-shrink-0 flex md:block justify-between"
                    >
                      <p className="content-center h-[44px] px-3 text-center text-[#8b3a9a] text-[16px] leading-5 font-medium font-HavalMittel">
                        текст текст
                      </p>
                      <p className="content-center h-[44px] px-3 text-center text-[#5e6976] text-[16px] leading-5 font-medium font-HavalMittel">
                        текст
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 md:m-0">
              <h2 className="mb-4 text-[28px] leading-8 font-HavalMittel-bold text-[#364059]">
                текст текст
              </h2>
              <button className="py-3 px-5 border-2 border-[#2f41b0] bg-[#2f41b0] text-white text-[20px] leading-6 font-medium font-HavalMittel rounded-[12px]">
                текст текст текст
              </button>
            </div>

            <div className="mt-14">
              <h2 className="mb-4 text-[28px] leading-8 font-bold font-HavalMittel ">
                текст текст текст
              </h2>
              {[
                'текст текст текст текст.',
                'текст текст текст — текст текст текст г.',
                'текст текст — текст% текст текст.',
                'текст текст текст текст текст текст текст текст текст текст текст текст N текст-р.',
                'текст текст: текст текст текст текст',
                'текст текст: текст «текст текст», текст. текст текст-текст',
              ].map((item) => (
                <p
                  key={item}
                  className="text-[#5e6976] font-HavalMittel-regular
                    text-[18px] leading-6 
                    xl:text-[20px]
                "
                >
                  {item}
                </p>
              ))}
              <p>
                текст текст текст <a href="#">текст текст текст</a> и
                <a href="#">текст текст текст</a>
              </p>
            </div>

            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/pdf-file.svg"
                  alt="ticket"
                  width={44}
                  height={44}
                />
                <p className="text-[18px] xl:text-[20px] leading-6 font-HavalMittel-regular">
                  текст текст текст текст текст текст
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/pdf-file.svg"
                  alt="ticket"
                  width={44}
                  height={44}
                />
                <p className="text-[18px] xl:text-[20px] leading-6 font-HavalMittel-regular">
                  текст текст текст текст текст текст
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="xl:max-w-[334px] w-full xl:bg-white mt-8 xl:m-0 rounded-[20px] text-[#364059]
          xl:p-8
        "
        >
          <h2 className="text-[28px] leading-8 font-bold font-HavalMittel mb-8">
            текст текст текст
          </h2>
          <div className="flex xl:flex-col gap-4 overflow-x-auto xl:overflow-x-visible w-full">
            <div className="max-w-[310px] min-w-[310px] xl:max-w-[700px] xl:min-w-[200px] mb-6">
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="another_lottery"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
                className="mb-2 rounded-[12px]"
              />
              <h3 className="mb-3 text-[24px] leading-8 font-medium font-HavalMittel">
                текст текст
              </h3>
              <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                текст текст текст
              </p>
            </div>
            <div className="max-w-[310px] min-w-[310px] xl:max-w-[700px] xl:min-w-[200px] mb-6">
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="another_lottery"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
                className="mb-2 rounded-[12px]"
              />
              <h3 className="mb-3 text-[24px] leading-8 font-medium font-HavalMittel">
                текст текст текст
              </h3>
              <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                текст текст текст
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailMomentaryLotteries;
