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
    <div className="mt-[74px] sm:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/about-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[450px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-bold font-HavalMittel">О компании</h1>
      </Container>

      <Container className="flex items-start gap-6">
        <div className="bg-white rounded-[20px] p-8 flex flex-col gap-8 max-w-[1050px]">
          <p className="max-w-[720px] text-[28px] leading-8 font-normal font-HavalMittel">
            Мы — новая государственная лотерея, организованная Министерством
            финансов Российской Федерации. Оператор лотереи: ООО «Спортивные
            Лотереи».
          </p>
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col gap-4 max-w-[481px]">
              <h2 className="text-[28px] leading-8 font-bold text-[#8b3a9a] font-HavalMittel">
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
              <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                Сделать лотереи по-настоящему национальной традицией,
                объединяющей поколения, где каждый сможет найти свою игру.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-[481px]">
              <h2 className="text-[28px] leading-8 font-bold text-[#8b3a9a] font-HavalMittel">
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
              <p className="text-[20px] leading-6 font-normal font-HavalMittel">
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
            <h2 className="mb-2 text-[28px] leading-8 font-bold font-HavalMittel">
              Отчетность
            </h2>
            <p className="text-[18px] leading-6 font-normal font-HavalMittel">
              Для нас честность и открытость не просто слова. Лотереи под
              брендом «Национальная Лотерея» проводятся на основании
              распоряжения Правительства Российской Федерации от 29 августа 2019
              г. № 1921-р в полном соответствии с законом о лотереях.
            </p>
            <p className="text-[18px] leading-6 font-normal font-HavalMittel">
              Здесь мы публикуем официальную отчетность компании ООО «Спортивные
              Лотереи», с которой может ознакомиться каждый.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <div className="flex items-center gap-2" key={report.id}>
                <Image
                  src="/icons/pdf-file.svg"
                  alt="our mission"
                  width={64}
                  height={64}
                />
                <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                  {report.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[334px] w-full flex flex-col gap-6">
          <Image
            src="/images/about-ask-question.png"
            alt="our mission"
            width={334}
            height={223}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/about-franchiza.png"
            alt="our mission"
            width={334}
            height={223}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
