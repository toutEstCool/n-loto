'use client';

import { BannerNewMillioner } from '@/shared/components/banner-new-millioner';
import { Faq } from '@/shared/components/faq';
import { LittleBannerCard } from '@/shared/components/little-banner-card';
import { LotteryGift } from '@/shared/components/lottery-gift';
import { LotteryTicketCard } from '@/shared/components/lottery-ticket-card';
import { News } from '@/shared/components/news';
import { Slider } from '@/shared/components/slider';
import { WBigSlider } from '@/shared/components/w-big-slider';
import { WinnerHistory } from '@/shared/components/winner-history';
import { Container } from '@/widgets/container';
import { Lotterykits } from '@/widgets/lottery-kits';
import { LotteryDouble } from '@/widgets/lottery-double';
import Image from 'next/image';

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
        {/* Next Step */}
        <div className="mt-5 sm:mt-6">
          <WBigSlider
            items={images.length}
            renderItem={(index) => (
              <div className="w-full flex items-center justify-center mx-1 h-[191px] sm:h-[213px] lg:h-[264px]">
                <Image
                  src={images[index]}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[191px] sm:h-[180px] lg:h-[264px] object-cover rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            )}
          />
        </div>
        {/* lottery double slider */}
        <LotteryDouble />
        {/* Lottery pack */}
        <Lotterykits />
        {/* Buy it */}
        <div className="sm:mt-16">
          <h2 className="text-center text-[#8b3a9a] mb-6 text-[42px] leading-[52px] font-medium">
            Покупайте, заполняйте, побеждайте!
          </h2>
          {/* Buy it card */}
          <div className="grid grid-cols-2 gap-2">
            {/* start */}
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            <LotteryTicketCard />
            {/* end */}
          </div>
        </div>

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
