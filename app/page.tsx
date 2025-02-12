'use client'

import { LittleBannerCard } from "@/shared/components/little-banner-card";
import { Slider } from "@/shared/components/slider";
import { WBigSlider } from "@/shared/components/w-big-slider";
import { Button } from "@/shared/ui/button";
import { Container } from "@/widgets/container";
import { Lotterykits } from "@/widgets/lottery-kits";
import Image from "next/image";


const cardData = [
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
  { type: "4x4", amount: "2 000", isBigWin: false, winners: 1, timeAgo: "58 минут назад" },
]

const images = [
  "https://online-static.website.cloud.croc.ru/online-meta/c5fa1490-408b-40ac-a345-aa0f2cb00f78.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/616856cb-b1fd-4ce5-8521-390494999abd.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/68e02bab-451d-4c53-8b35-e18d9fbfe0f1.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/3db8e1dc-f786-4121-829f-2294a3a9a4d9.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/a3e05fd3-73ef-4eeb-914b-bb42060a58da.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/cdd3a83c-ea03-4440-a2f0-5b11dfaabbaa.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/9b36be50-3ee6-44b3-a28d-92beb6ae629f.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/ea5f8e3b-9e62-4607-8630-d1467f4cd56f.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/1d461510-288e-4f60-9863-1d6ff12e025a.jpg",
  "https://online-static.website.cloud.croc.ru/online-meta/92f1ef48-addc-4e74-8e69-40499d0fadee.jpg"
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-[74px] sm:mt-[122px] flex items-center gap-[70px]">
          <Slider cards={cardData} />
          <LittleBannerCard bgUrl="https://online-static.website.cloud.croc.ru/online-meta/44e021fe-69e6-49e5-9558-92f182600fc0.png" />
        </div>
        {/* Next Step */}
        <div className="mt-5 sm:mt-6">
          <WBigSlider
            items={images.length}
            renderItem={(index) => (
              <div className="w-full flex items-center justify-center mx-1 h-[191px] sm:h-[213px] lg:h-[264px]"
              >
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
        {/* Lottery pack */}
        <Lotterykits />
        {/* Buy it */}
        <div className="sm:mt-16">
          <h2 className="text-center text-[#8b3a9a] mb-6 text-[42px] leading-[52px] font-medium">Покупайте, заполняйте, побеждайте!</h2>
          {/* Buy it card */}
          <div>
            {/* start */}
            <div className="flex items-center p-4 bg-white max-w-[700px] w-full rounded-xl">
              {/* Левая часть с изображением (70%) */}
              <div className="w-[70%]">
                <Image
                  src="https://i.pinimg.com/736x/48/89/96/488996c0c5cdc233b3523b926947fef8.jpg"
                  alt="Card Banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Разделительная пунктирная линия */}
              <div className="h-full border-l border-dashed border-gray-400 mx-4"></div>
              {/* Правая часть (30%) */}
              <div className="w-[30%] text-lg font-bold flex flex-col">
                <div>
                  <div>
                    <p>Тираж <br /> № 000127</p>
                    <p>
                      <time>23.02.2025</time>
                    </p>
                  </div>
                </div>
                <div>
                  <p>300 ₽</p>
                  <Button>Купить</Button>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </Container >
    </>
  );
}
