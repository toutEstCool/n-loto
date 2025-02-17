import { Button } from '@/shared/ui/button';
import { Gift, Tag } from 'lucide-react';

export const LotteryKitsCard = () => {
  return (
    <div className="mr-3 w-[318px] rounded-xl relative">
      <div>
        <div
          className="w-full h-[368px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://online-static.website.cloud.croc.ru/online-meta/8495e5d8-e87f-474e-8125-e8ebabf0cff5.png')`,
          }}
        >
          <div className="absolute w-[90%] top-[50%] left-4 flex flex-col justify-center gap-3">
            <div className="flex items-center justify-between mt-[10px]">
              <div className="flex items-center gap-1">
                <Tag color="white" width={13} height={13} fill="#2f41b0" />
                <span
                  className="text-[#364059] font-HavalMittel-regular
                  leading-[16px] text-[14px]
                  xl:leading-[20px] xl:text-[15px]
                "
                >
                  50 билетов
                </span>
              </div>
              <p
                className="text-[#024cf8] font-HavalMittel-regular
                  leading-[16px] text-[14px]
                  xl:leading-[20px] xl:text-[15px]"
              >
                Что внутри?
              </p>
            </div>
            <div>
              <h2
                className="text-center h-[63px] text-[#364059] font-HavalMittel-bold
                text-[16px] leading-5
                xl:text-[18px] xl:leading-6
              "
              >
                Разыграем от 100 млн ₽ на всех
              </h2>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <Button
                className="w-full bg-[#2f41b0] rounded-xl hover:bg-[#2a399e] h-full font-HavalMittel-medium
                text-[18px] leading-6
                xl:text-[20px] xl:leading-6
              "
              >
                Купить · 300 ₽
              </Button>
              <div className="max-w-[64px] w-full border-[2px] py-3 px-5 flex rounded-xl border-[#8b3a9a] cursor-pointer">
                <Gift width={20} height={20} color="#8b3a9a" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
