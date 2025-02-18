import Image from 'next/image';
import { Container } from '@/widgets/container';
import React from 'react';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';

const reports = [
  {
    title: 'Отчет о проведении лотереи «ВГЛ-1Т» за 2021 год',
    id: 1,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-1Т» за 2022 год',
    id: 2,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-1Т» за 2023 год',
    id: 3,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-2Т» за 2022 год',
    id: 4,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-2Т» за 2023 год',
    id: 5,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-3б» за 2022 год',
    id: 6,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-3Б» за 2023 год',
    id: 7,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-3Т» за 2020 год',
    id: 8,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-3Т» за 2021 год',
    id: 9,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-3Т» за 2023 год',
    id: 10,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-4Б» за 2023 год',
    id: 11,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-4Т» за 2022 год',
    id: 12,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-4Т» за 2023 год',
    id: 13,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-5Т» за 2020 год',
    id: 14,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-5Т» за 2021 год',
    id: 15,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-5Т» за 2023 год',
    id: 16,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-6Б» за 2020 год',
    id: 17,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-6б» за 2021 год',
    id: 18,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-6б» за 2022 год',
    id: 19,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-6Б» за 2023 год',
    id: 20,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-7Б» за 2023 год',
    id: 21,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-8б» за 2022 год',
    id: 22,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-8Б» за 2023 год',
    id: 23,
  },
  {
    title: 'Отчет о проведении лотереи «ВГЛ-9Б» за 2023 год',
    id: 24,
  },
  {
    title:
      'Сводная ведомость результатов проведения специальной оценки условий труда',
    id: 25,
  },
];

const About = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'О компании', href: '/about' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/about-bg.png)',
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
          О компании
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
            Мы — новая государственная лотерея, организованная Министерством
            финансов Российской Федерации. Оператор лотереи: ООО «Спортивные
            Лотереи».
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
                НАША МИССИЯ
              </h2>
              <Image
                src="/images/about-space-rocket.png"
                alt="our mission"
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
                Сделать лотереи по-настоящему национальной традицией,
                объединяющей поколения, где каждый сможет найти свою игру.
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
                НАШИ ЦЕННОСТИ
              </h2>
              <Image
                src="/images/about-space-earth.png"
                alt="our mission"
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
                Играть честно. Действовать открыто и в интересах общества. Быть
                доступными для всех.
              </p>
            </div>
          </div>
          <Image
            src="/images/about-banner.png"
            alt="our mission"
            width={1000}
            height={1000}
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
              Отчетность
            </h2>
            <p
              className="font-HavalMittel-regular text-[#364059]
              text-[16px] leading-5
              xl:text-[18px] xl:leading-6
              "
            >
              Для нас честность и открытость не просто слова. Лотереи под
              брендом «Национальная Лотерея» проводятся на основании
              распоряжения Правительства Российской Федерации от 29 августа 2019
              г. № 1921-р в полном соответствии с законом о лотереях.
            </p>
            <p
              className="font-HavalMittel-regular text-[#364059]
              text-[16px] leading-5
              xl:text-[18px] xl:leading-6
            "
            >
              Здесь мы публикуем официальную отчетность компании ООО «Спортивные
              Лотереи», с которой может ознакомиться каждый.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 чд:grid-cols-3 gap-4">
            {reports.map((report) => (
              <div className="flex items-center gap-2" key={report.id}>
                <Image
                  src="/icons/pdf-file.svg"
                  alt="our mission"
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
            src="/images/about-ask-question.png"
            alt="our mission"
            width={334}
            height={223}
            className="block md:hidden xl:block"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/about-mark_tg.png"
            alt="our mission"
            width={334}
            height={223}
            className="hidden md:block xl:hidden"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/about-franchiza.png"
            alt="our mission"
            width={334}
            height={223}
            className="block md:hidden xl:block"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/about-franshiza_table.png"
            alt="our mission"
            width={334}
            height={223}
            className="hidden md:block xl:hidden"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
