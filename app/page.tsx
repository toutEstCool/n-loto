'use client';

import { BannerNewMillioner } from '@/shared/components/banner-new-millioner';
import { Faq } from '@/shared/components/faq';
import { LotteryGift } from '@/shared/components/lottery-gift';
import { News } from '@/shared/components/news';
import { Slider } from '@/shared/components/slider';
import { WBigSlider } from '@/shared/components/w-big-slider';
import { WinnerHistory } from '@/shared/components/winner-history';
import { Container } from '@/widgets/container';
import { Lotterykits } from '@/widgets/lottery-kits';
import { LotteryDouble } from '@/widgets/lottery-double';
import Image from 'next/image';
import { TicketLottery } from '@/shared/components/ticket-lottery';

const cardData = [
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: true,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: false,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: true,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: false,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: true,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: false,
    winners: 1,
    timeAgo: '58 минут назад',
  },
  {
    type: '4x4',
    amount: '2 000',
    isBigWin: false,
    winners: 1,
    timeAgo: '58 минут назад',
  },
];

const images = [
  'https://online-static.website.cloud.croc.ru/online-meta/c5fa1490-408b-40ac-a345-aa0f2cb00f78.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/616856cb-b1fd-4ce5-8521-390494999abd.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/68e02bab-451d-4c53-8b35-e18d9fbfe0f1.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/3db8e1dc-f786-4121-829f-2294a3a9a4d9.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/a3e05fd3-73ef-4eeb-914b-bb42060a58da.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/cdd3a83c-ea03-4440-a2f0-5b11dfaabbaa.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/9b36be50-3ee6-44b3-a28d-92beb6ae629f.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/ea5f8e3b-9e62-4607-8630-d1467f4cd56f.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/1d461510-288e-4f60-9863-1d6ff12e025a.jpg',
  'https://online-static.website.cloud.croc.ru/online-meta/92f1ef48-addc-4e74-8e69-40499d0fadee.jpg',
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-[74px] sm:mt-[122px] flex items-center gap-[70px]">
          <Slider cards={cardData} />
          {/* <LittleBannerCard bgUrl="https://online-static.website.cloud.croc.ru/online-meta/44e021fe-69e6-49e5-9558-92f182600fc0.png" /> */}
        </div>
        <div className="mt-5 sm:mt-6">
          <WBigSlider
            items={images.length}
            renderItem={(index) => (
              <div className="w-full relative flex items-center justify-center mx-1 h-[191px] sm:h-[213px] lg:h-[264px]">
                <Image
                  src={images[index]}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[191px] sm:h-[180px] lg:h-[264px] rounded-lg"
                  width={500}
                  height={300}
                />

                <div className="w-[18px] h-[18px] absolute bg-[#F2F4FF] top-1/2 -translate-y-1/2 -left-[9px] rounded-full"></div>
                <div className="w-[18px] h-[18px] absolute bg-[#F2F4FF] top-1/2 -translate-y-1/2 -right-[9px] rounded-full"></div>
              </div>
            )}
          />
        </div>

        <LotteryDouble />

        <Lotterykits />

        <div className="mt-8 sm:mt-16">
          <h2
            className="text-[#8b3a9a] mb-6 flex flex-col text-center xl:block font-Acrom
            text-[28px] leading-[32px] font-bold
            md:font-medium md:text-[36px] md:leading-[42px]
            xl:text-[42px] xl:leading-[52px] 
          "
          >
            <span>Покупайте,</span> заполняйте, побеждайте!
          </h2>
        </div>
        <TicketLottery />
        <LotteryGift />
        <BannerNewMillioner />

        <WinnerHistory />
        <BannerNewMillioner />
        <News />
      </Container>
      <Faq />
    </>
  );
}
