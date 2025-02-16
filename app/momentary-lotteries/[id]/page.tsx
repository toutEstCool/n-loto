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
    <div className="mt-[74px] sm:mt-[86px] min-h-screen relative mb-16">
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
          Моментальная лотерея «Новый год. Бирка зеленая»
        </h1>
      </Container>
      <Container className="flex items-start gap-6">
        <div className="max-w-[1050px] w-full flex flex-col gap-8">
          <div className="bg-white p-8 rounded-[20px] flex gap-6">
            <div className="">
              <Image
                src="/images/detail-lottery.jpg"
                alt="ticket"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="mt-11 flex flex-col gap-16">
              <div className="text-[#8b3a9a] flex flex-col gap-4">
                <div>
                  <p className="text-[24px] leading-8 font-medium font-HavalMittel">
                    главный приз
                  </p>
                  <p className="text-[60px] leading-[60px] font-bold font-HavalMittel">
                    5 000 000 ₽
                  </p>
                </div>
                <div>
                  <p className="text-[24px] leading-8 font-medium font-HavalMittel">
                    цена билета
                  </p>
                  <p className="text-[60px] leading-[60px] font-bold font-HavalMittel">
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
                <p className="text-[16px] leading-[20px] font-normal font-HavalMittel text-[#024cf8]">
                  Показать карту продаж
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white p-8 rounded-[20px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] leading-8 font-bold font-HavalMittel ">
                Как играть
              </h2>
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] leading-8 font-bold font-HavalMittel ">
                  Игра 1
                </h2>
                <div className="w-full flex gap-6">
                  <div className="w-[33.3333%] flex flex-col gap-6">
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
                      <h3 className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Шаг 1.
                      </h3>
                      <p className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Удалите защитный слой с игровых полей «Выигрышные числа»
                        и «Ваши числа».
                      </p>
                    </div>
                  </div>
                  <div className="w-[33.3333%] flex flex-col gap-6">
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
                      <h3 className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Шаг 2.
                      </h3>
                      <p className="text-[20px] leading-6 font-medium font-HavalMittel">
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
                <h2 className="text-[24px] leading-8 font-bold font-HavalMittel ">
                  Игра 2
                </h2>
                <div className="w-full flex gap-6">
                  <div className="w-[33.3333%] flex flex-col gap-6">
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
                      <h3 className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Шаг 1.
                      </h3>
                      <p className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Сотрите защитный слой поля «Бонусная игра» и
                        отсканируйте QR-код на билете.
                      </p>
                    </div>
                  </div>
                  <div className="w-[33.3333%] flex flex-col gap-6">
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
                      <h3 className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Шаг 2.
                      </h3>
                      <p className="text-[20px] leading-6 font-medium font-HavalMittel">
                        Перейдите на nloto.ru и испытайте удачу в рулетке с
                        подарками.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-2 text-[28px] leading-8 font-bold font-HavalMittel ">
                Призовой фонд
              </h2>
              <p>На серию из 1 000 000 лотерейных билетов</p>

              <div className="flex gap-4 mt-6">
                <div className="max-w-[112px] w-full h-[88px] text-[#929eab]">
                  <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                    Размер выигрыша
                  </p>
                  <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                    Кол-во выигрышей
                  </p>
                </div>
                <div className="flex gap-2 overflow-auto h-[127px]">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className="max-w-[112px] w-full h-[88px] border rounded-[16px] flex-shrink-0"
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

            <div className="">
              <h2 className="mb-4 text-[28px] leading-8 font-bold font-HavalMittel ">
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
              <p>«ВГЛ-4Б Спорт Союз». Таблица № 30. Алгоритм 4.</p>
              <p>Срок проведения лотереи — до 29 августа 2034 г.</p>
              <p>Призовой фонд — 55% от выручки.</p>
              <p>
                Лотерея проводится на основании распоряжения Правительства
                Российской Федерации от 29 августа 2019 г. N 1921-р.
              </p>
              <p>
                Организатор лотереи: Министерство финансов Российской Федерации
              </p>
              <p>
                Оператор лотереи: ООО «Спортивные Лотереи», тел. 8 800 333-7-333
              </p>
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
                <p className="text-[20px] leading-6 font-normal font-HavalMittel">
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
                <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                  Правила проведения акции «Бонусная игра»
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[334px] w-full bg-white p-8 rounded-[20px]">
          <h2 className="text-[28px] leading-8 font-bold font-HavalMittel mb-8">
            Другие лотереи
          </h2>
          <div className="mb-6">
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
          <div className="mb-6">
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
      </Container>
    </div>
  );
};

export default DetailMomentaryLotteries;
