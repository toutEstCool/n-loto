import { Clock } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const TimerLabel = () => {
  return (
    <div className="flex items-center gap-1 p-2 rounded-[12px] bg-[red] text-white">
      <Clock />

      <p>Через 10 мин 20 сек</p>
    </div>
  );
};

export const LotteryCountCard = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="max-w-[353px] mr-3 w-full flex">
      <Image
        src={'/images/color-balls.png'}
        alt="lottery-balls"
        width={500}
        height={300}
        style={{ width: '100%', maxWidth: '237px', height: '100%' }}
      />
      <div className="bg-[#e4d9b9] w-full rounded-[10px] p-3 flex flex-col justify-between">
        <div className=" w-full flex items-center justify-between rounded-[4px] h-auto p-1 bg-[#112D73]">
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
        <div className="text-center border-y-[2px] border-[#000] ">
          <p className="text-[28px] leading-8 font-medium font-HavalMittel">
            100 ₽
          </p>
        </div>
      </div>
    </div>
  );
};
