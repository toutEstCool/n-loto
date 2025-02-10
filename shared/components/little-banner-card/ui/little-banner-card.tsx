import { Button } from "@/shared/ui/button";
import { Clock3 } from "lucide-react";
import { FC } from "react";

interface ILittleBannerCardProps {
  bgUrl?: string
}

export const LittleBannerCard: FC<ILittleBannerCardProps> = (props) => {
  const { bgUrl } = props

  return (
    <div className="min-w-[392px] max-w-[392px] ml-auto relative h-[152px] hidden xl:block">
      {/* Элемент с фоном */}
      <div
        className="rounded-3xl absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
        }}
      ></div>

      {/* Контент */}
      <div className="absolute z-20 flex flex-row gap-[6px] items-center top-[12px] right-[12px] text-[11px] text-[#B9C1CD]">
        <Clock3 width={11} height={11} />
        <span className="font-bold">13 ч 16 м</span>
      </div>
      <div className="relative z-1 pt-[24px] pr-[12px] pb-[8px] pl-[100px] text-white text-[13px] font-medium flex flex-col gap-[6px]">
        <p className="text-[16px]">По следам удачи</p>
        <p>Выполняйте задания и получайте награды!</p>
      </div>
      <Button className="z-10 relative top-6 w-[95%] left-2 rounded-[8px] h-[32px] bg-[#af21c9] border-[#af21c9] hover:bg-[#af21c9]">
        Перейти к квесту
      </Button>
    </div>
  )
};
