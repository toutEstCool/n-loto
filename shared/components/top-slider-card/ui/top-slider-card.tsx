import { Clock3, Tag } from "lucide-react";

interface ICardProps {
  type: string;
  amount: string;
  isBigWin: boolean;
  winners: number;
  timeAgo: string;
}

export const TopSliderCard: React.FC<ICardProps> = (props) => {
  const { amount, winners, timeAgo } = props

  return (
    <div className="h-[152px] bg-white rounded-3xl p-3 cursor-pointer flex flex-col justify-between" style={{ userSelect: "none" }}>
      <div className="flex items-center justify-between w-full">
        <h3 className="font-extrabold text-[13px] sm:text-[18px]">4x4</h3>
        <p className="h-full text-[#8f42cb] font-medium text-[11px] sm:text-[16px] whitespace-nowrap">
          Крупный выигрыш!
        </p>
      </div>
      <div>
        <h2 className="text-[24px] sm:text-[32px] text-[#364059] font-bold">{amount} ₽</h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Tag color="#5e6976" width={12} height={12} />
          <span className="text-[#5e6976] text-[10px] sm:text-[13px] font-medium">{winners} выйграл</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock3 color="#B9C1CD" width={12} height={12} />
          <span className="text-[#B9C1CD] text-[10px] sm:text-[13px] font-medium">{timeAgo}</span>
        </div>
      </div>
    </div>
  )
}