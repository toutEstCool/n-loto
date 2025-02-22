import Image from 'next/image';
import { Container } from '@/widgets/container';
import React from 'react';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';

const reports = [
  { title: 'текст текст текст текст «текст» текст текст', id: 1 },
  { title: 'текст текст текст текст «текст» текст текст', id: 2 },
  { title: 'текст текст текст текст «текст» текст текст', id: 3 },
  { title: 'текст текст текст текст «текст» текст текст', id: 4 },
  { title: 'текст текст текст текст «текст» текст текст', id: 5 },
  { title: 'текст текст текст текст «текст» текст текст', id: 6 },
  { title: 'текст текст текст текст «текст» текст текст', id: 7 },
  { title: 'текст текст текст текст «текст» текст текст', id: 8 },
  { title: 'текст текст текст текст «текст» текст текст', id: 9 },
  { title: 'текст текст текст текст «текст» текст текст', id: 10 },
  { title: 'текст текст текст текст «текст» текст текст', id: 11 },
  { title: 'текст текст текст текст «текст» текст текст', id: 12 },
  { title: 'текст текст текст текст «текст» текст текст', id: 13 },
  { title: 'текст текст текст текст «текст» текст текст', id: 14 },
  { title: 'текст текст текст текст «текст» текст текст', id: 15 },
  { title: 'текст текст текст текст «текст» текст текст', id: 16 },
  { title: 'текст текст текст текст «текст» текст текст', id: 17 },
  { title: 'текст текст текст текст «текст» текст текст', id: 18 },
  { title: 'текст текст текст текст «текст» текст текст', id: 19 },
  { title: 'текст текст текст текст «текст» текст текст', id: 20 },
  { title: 'текст текст текст текст «текст» текст текст', id: 21 },
  { title: 'текст текст текст текст «текст» текст текст', id: 22 },
  { title: 'текст текст текст текст «текст» текст текст', id: 23 },
  { title: 'текст текст текст текст «текст» текст текст', id: 24 },
  { title: 'текст текст текст текст текст текст текст текст текст', id: 25 },
];

const About = () => {
  const breadcrumbItems = [
    { label: 'текст текст', href: '/' },
    { label: 'текст текст текст', href: '/about' },
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
          текст текст
        </h1>
      </Container>

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 max-w-[1050px]">
          <p
            className="max-w-[720px] font-HavalMittel-regular text-[#364059]
            text-[24px] leading-8
            xl:text-[28px]
          "
          >
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div
              className="flex flex-col gap-4 
              max-w-[332px]
              xl:max-w-[481px]
            "
            >
              <h2
                className="text-[#8b3a9a] font-HavalMittel-bold
                text-[24px] leading-8
                xl:text-[28px]
              "
              >
                текст текст
              </h2>
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="our mission"
                className="rounded-[12px]"
                width={1000}
                height={1000}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p
                className="font-HavalMittel-regular text-[#364059]
                text-[18px] leading-6 
                xl:text-[20px] 
              "
              >
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст
              </p>
            </div>
            <div
              className="flex flex-col gap-4 
              max-w-[332px]
              xl:max-w-[481px]
            "
            >
              <h2
                className="text-[#8b3a9a] font-HavalMittel-bold
                text-[24px] leading-8
                xl:text-[28px]
              "
              >
                текст текст
              </h2>
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="our mission"
                className="rounded-[12px]"
                width={1000}
                height={1000}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p
                className="font-HavalMittel-regular text-[#364059]
                text-[18px] leading-6 
                xl:text-[20px] 
              "
              >
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст
              </p>
            </div>
          </div>
          <Image
            src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
            alt="our mission"
            width={1000}
            height={1000}
            className="rounded-[12px] max-h-[494px] md:max-h-[307px] xl:max-h-[292px]"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className="max-w-[675px] w-full flex flex-col gap-2">
            <h2
              className="mb-4 xl:mb-2 font-HavalMittel-bold text-[#364059]
              text-[24px] leading-8
              xl:text-[28px]
            "
            >
              текст текст
            </h2>
            <p
              className="font-HavalMittel-regular text-[#364059]
              text-[16px] leading-5
              xl:text-[18px] xl:leading-6
              "
            >
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
            </p>
            <p
              className="font-HavalMittel-regular text-[#364059]
              text-[16px] leading-5
              xl:text-[18px] xl:leading-6
            "
            >
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 чд:grid-cols-3 gap-4">
            {reports.map((report) => (
              <div className="flex items-center gap-2" key={report.id}>
                <Image
                  src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                  alt="our mission"
                  className="rounded-[12px]"
                  width={64}
                  height={64}
                />
                <p
                  className="font-HavalMittel-regular hover:text-[#A0379E]
                  text-[18px] leading-6
                  xl:text-[20px]
                "
                >
                  {report.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:max-w-[334px] w-full flex flex-col gap-6">
          <Image
            src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
            alt="our mission"
            width={334}
            height={223}
            className="block md:hidden xl:block rounded-[12px]"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
            alt="our mission"
            width={334}
            height={223}
            className="hidden md:block xl:hidden rounded-[12px]"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
            alt="our mission"
            width={334}
            height={223}
            className="block md:hidden xl:block rounded-[12px]"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
            alt="our mission"
            width={334}
            height={223}
            className="hidden md:block xl:hidden rounded-[12px]"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
