import { Clock } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const TimerLabel = () => {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-[12px] bg-[#e4002b] text-white">
      <Clock size={16} />
      <p className="text-[10px] font-HavalMittel-regular">
        Через 10 мин 20 сек
      </p>
    </div>
  );
};

export const LotteryCountCard = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="xl:max-w-[353px] w-full flex xl:flex-row flex-col relative">
      <div className="absolute top-1 left-1 w-full">
        <TimerLabel />
      </div>
      <Image
        src={'/images/color-balls.png'}
        alt="lottery-balls"
        width={500}
        height={300}
        className="xl:max-w-[237px] max-h-[100px]"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div className="bg-[#e4d9b9] w-full rounded-[10px] p-3 flex xl:flex-col justify-between ">
        <div className="max-w-[92px] w-full flex items-center justify-between rounded-[4px] h-auto p-1 bg-[#112D73]">
          <button
            onClick={decrement}
            className={` w-6 h-6 ${count === 0 ? 'bg-[#5e6976] text-[#475775] cursor-not-allowed' : 'bg-[#2f46b0]'}  text-white rounded-[2px] text-[24px] flex items-center justify-center`}
          >
            -
          </button>
          <span className=" text-center text-white">{count}</span>
          <button
            onClick={increment}
            className="w-6 h-6 bg-[#0071F4] text-white rounded-[2px] text-[24px] flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="text-center border-y-[2px] border-[#364059] ">
          <p className="xl:text-[28px] text-[24px] leading-8 font-medium font-HavalMittel text-[#364059]">
            100 ₽
          </p>
        </div>
      </div>
    </div>
  );
};
