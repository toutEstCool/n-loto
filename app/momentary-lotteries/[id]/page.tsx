import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import Image from 'next/image';
import React from 'react';

const DetailMomentaryLotteries = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Моментальные лотереи', href: '/get-lottery-win' },
    { label: 'Новый год. Бирка зеленая', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16">
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
          className="font-Acrom 
            text-[24px] leading-8 font-medium
            md:text-[28px] md:leading-8 md:font-medium
            xl:text-4xl xl:font-bold
          "
        >
          Моментальная лотерея «Новый год. Бирка зеленая»
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
                src="/images/detail-lottery.jpg"
                alt="ticket"
                className=""
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
                    главный приз
                  </p>
                  <p
                    className="font-HavalMittel-bold 
                    text-[38px] leading-[38px] 
                    md:text-[60px] md:leading-[60px] 
                  "
                  >
                    5 000 000 ₽
                  </p>
                </div>
                <div>
                  <p
                    className="font-HavalMittel-medium
                    text-[20px] leading-6
                    xl:text-[24px] xl:leading-8
                  "
                  >
                    цена билета
                  </p>
                  <p
                    className="font-HavalMittel-bold 
                    text-[38px] leading-[38px] 
                    md:text-[60px] md:leading-[60px] 
                  "
                  >
                    100 ₽
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
                    Продажа билетов только офлайн
                  </span>
                </button>
                <p className="text-[14px] leading-4 xl:text-[16px] xl:leading-[20px] font-normal font-HavalMittel text-[#024cf8]">
                  Показать карту продаж
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
                Как играть
              </h2>
              <div className="flex flex-col gap-4 text-[text-[#364059]]">
                <h2 className="text-[24px] leading-8 font-HavalMittel-bold ">
                  Игра 1
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
                        Шаг 1.
                      </h3>
                      <p className="xl:text-[20px] text-[18px] font-HavalMittel-regular">
                        Удалите защитный слой с игровых полей «Выигрышные числа»
                        и «Ваши числа».
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
                        Шаг 2.
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        Если в поле «Ваши числа» Вы нашли число, которое совпало
                        с каким-либо числом из поля «Выигрышные числа», Вы
                        выиграли денежную сумму, которая указана под совпавшим
                        числом. Если таких совпавших чисел несколько, Ваш
                        выигрыш суммируется.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] leading-8 font-HavalMittel-bold ">
                  Игра 2
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
                        Шаг 1.
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        Сотрите защитный слой поля «Бонусная игра» и
                        отсканируйте QR-код на билете.
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
                        Шаг 2.
                      </h3>
                      <p className="xl:text-[20px] text-[18px] leading-6 font-HavalMittel-regular">
                        Перейдите на nloto.ru и испытайте удачу в рулетке с
                        подарками.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-2 text-[28px] leading-8 font-bold font-HavalMittel text-[#364059]">
                Призовой фонд
              </h2>
              <p
                className="text-[#5e6976]
                text-[16px] leading-5 font-HavalMittel-regular
                xl:text-[20px] xl:leading-6
              "
              >
                На серию из 1 000 000 лотерейных билетов
              </p>

              <div className="md:flex gap-4 mt-6">
                <div
                  className="w-full flex text-[#929eab]
                  md:h-[88px] md:max-w-[112px] md:block
                "
                >
                  <p className="text-[14px] leading-4 md:text-[16px] md:leading-5 font-HavalMittel-regular">
                    Размер выигрыша
                  </p>
                  <p className="text-[14px] leading-4 md:text-[16px] md:leading-5 font-HavalMittel-regular">
                    Кол-во выигрышей
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:overflow-auto md:h-[127px]">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className="md:max-w-[112px] w-full md:h-[88px] bg-[#efebe0] rounded-[8px] md:rounded-[16px] flex-shrink-0 flex md:block justify-between"
                    >
                      <p className="content-center h-[44px] px-3 text-center text-[#8b3a9a] text-[16px] leading-5 font-medium font-HavalMittel">
                        1 000 000 ₽
                      </p>
                      <p className="content-center h-[44px] px-3 text-center text-[#5e6976] text-[16px] leading-5 font-medium font-HavalMittel">
                        1
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 md:m-0">
              <h2 className="mb-4 text-[28px] leading-8 font-HavalMittel-bold text-[#364059]">
                Где купить
              </h2>
              <button className="py-3 px-5 border-2 border-[#2f41b0] bg-[#2f41b0] text-white text-[20px] leading-6 font-medium font-HavalMittel rounded-[12px]">
                Показать карту продаж
              </button>
            </div>

            <div className="mt-14">
              <h2 className="mb-4 text-[28px] leading-8 font-bold font-HavalMittel ">
                Правовая информация
              </h2>
              {[
                '«ВГЛ-4Б Спорт Союз». Таблица № 30. Алгоритм 4.',
                'Срок проведения лотереи — до 29 августа 2034 г.',
                'Призовой фонд — 55% от выручки.',
                'Лотерея проводится на основании распоряжения Правительства Российской Федерации от 29 августа 2019 г. N 1921-р.',
                'Организатор лотереи: Министерство финансов Российской Федерации',
                'Оператор лотереи: ООО «Спортивные Лотереи», тел. 8 800 333-7-333',
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
                Условия проведения лотереи размещены на сайте{' '}
                <a href="https://nloto.ru">https://nloto.ru</a> и
                <a href="http://publication.pravo.gov.ru">
                  http://publication.pravo.gov.ru
                </a>
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
                  Приказ Минфина России от 07.11.2024 № 162н
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
                  Правила проведения акции «Бонусная игра»
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
            Другие лотереи
          </h2>
          <div className="flex xl:flex-col gap-4 overflow-x-auto xl:overflow-x-visible w-full">
            <div className="max-w-[310px] min-w-[310px] xl:max-w-[700px] xl:min-w-[200px] mb-6">
              <Image
                src="/images/detail-another_lottery.png"
                alt="another_lottery"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
                className="mb-2"
              />
              <h3 className="mb-3 text-[24px] leading-8 font-medium font-HavalMittel">
                Открытка
              </h3>
              <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                Главный приз 1 000 000 ₽
              </p>
            </div>
            <div className="max-w-[310px] min-w-[310px] xl:max-w-[700px] xl:min-w-[200px] mb-6">
              <Image
                src="/images/detail-another_lottery.png"
                alt="another_lottery"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
                className="mb-2"
              />
              <h3 className="mb-3 text-[24px] leading-8 font-medium font-HavalMittel">
                Первая Премия. Ближе к звездам
              </h3>
              <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                Главный приз 777 777 ₽
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailMomentaryLotteries;
