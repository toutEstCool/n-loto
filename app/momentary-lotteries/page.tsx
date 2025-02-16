import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MomentaryLotteries = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Моментальные лотереи', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[74px] sm:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/momentary_lotteries-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[380px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-bold font-HavalMittel">
          Моментальные лотереи
        </h1>
      </Container>
      <Container>
        <div className="xl:max-w-[1050px] w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-6">
            <div className="w-full flex gap-6">
              <div className="max-w-[562px] w-full bg-white rounded-[20px] lg:p-6 xl:p-8 h-[332px] flex flex-col items-start justify-center">
                <div className="lg:flex lg:gap-4 xl:block xl:gap-0">
                  <Image
                    src="/icons/ticket.svg"
                    alt="ticket"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <h3 className="mb-4 text-[24px] leading-8 font-bold font-HavalMittel">
                    Что такое моментальные лотереи?
                  </h3>
                </div>
                <p className="text-[20px] leading-6 font-normal font-HavalMittel">
                  В билете моментальной (бестиражной) лотереи Вы увидите свой
                  выигрыш сразу, удалив защитный слой. Вам не нужно ждать
                  специального розыгрыша тиража.
                </p>
              </div>
              <div className="max-w-[464px] w-full bg-white rounded-[20px] lg:p-6 xl:p-8">
                <p className="mb-6 text-[20px] leading-6 font-normal font-HavalMittel">
                  Билеты моментальных лотерей продаются только офлайн:
                </p>
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src="/icons/russian-mail-post.svg"
                    alt="russian-mail-post"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4 className="text-[20px] leading-6 font-bold font-HavalMittel">
                      Почта России
                    </h4>
                    <p>В почтовых отделениях</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src="/icons/lottery-favicon.svg"
                    alt="russian-mail-post"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4 className="text-[20px] leading-6 font-bold font-HavalMittel">
                      Национальная лотерея
                    </h4>
                    <p>Собственные точки продаж</p>
                  </div>
                </div>
                <p className="text-[#024cf8] text-[20px] leading-6 font-normal font-HavalMittel">
                  Показать карту продаж
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white lg:p-6 xl:p-8 pb-2 rounded-[20px] flex flex-col gap-4">
            <h2 className="lg:text-[24px] xl:text-[28px] leading-8 font-bold font-HavalMittel">
              Лотереи
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 max-w-[1010px] w-full gap-x-6">
              {Array.from({ length: 14 }).map((_, index) => (
                <Link href={`/momentary-lotteries/${index}`} key={index}>
                  <div className="mb-6">
                    <Image
                      src="/images/quest-lottery.webp"
                      alt="lottery-1"
                      width={1000}
                      height={1000}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div className="py-1 px-2 my-2 bg-[#efebe0] inline-flex gap-2 object-contain rounded-[8px] relative">
                      <p className="text-[18px] leading-6 font-normal font-HavalMittel">
                        Билет • 100 ₽
                      </p>
                    </div>
                    <h3 className="mb-3 text-[20px] leading-6 font-medium font-HavalMittel">
                      Мечталлион
                    </h3>
                    <p className="text-[16px] leading-5 font-normal font-HavalMittel">
                      Главный приз 1 000 000 ₽
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className=" bg-white lg:p-6 xl:p-8 rounded-[20px]">
            <h2 className="mb-4 lg:text-[24px] xl:text-[28px] leading-8 font-bold font-HavalMittel ">
              Где купить
            </h2>
            <button className="py-3 px-5 border-2 border-[#2f41b0] bg-[#2f41b0] text-white text-[20px] leading-6 font-medium font-HavalMittel rounded-[12px]">
              Показать карту продаж
            </button>
          </div>
          <div className=" bg-white lg:p-6 xl:p-8 rounded-[20px]">
            <div className="bg-[#f0ead8] p-6 flex justify-between items-center rounded-[12px]">
              <h2 className="lg:text-[24px] xl:text-[28px] leading-8 font-medium font-HavalMittel">
                Где и как получить выигрыш?
              </h2>
              <div
                className={`w-[44px] h-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer`}
              >
                <ChevronUp stroke="#000" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MomentaryLotteries;
