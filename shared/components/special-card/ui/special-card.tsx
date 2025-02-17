import Image from 'next/image';
import React from 'react';

export const SpecialCard = () => {
  return (
    <div className="max-w-[432px] w-full flex flex-col gap-3 md:h-[483px]">
      <Image
        src="/images/special.jpg"
        alt=""
        width={1050}
        height={450}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div>
        <p
          className="font-HavalMittel-regular text-[#364059]
          text-[18px] leading-6
          xl:text-[20px]
        "
        >
          До 9 марта 2025 года
        </p>
        <h3
          className="font-bold font-Acrom mt-2
          text-[18px] leading-6
        "
        >
          Дарите любимым «Мечталлион»
        </h3>
      </div>
      <div className="mt-auto">
        <p
          className="font-HavalMittel-regular mb-1 text-[#364059]
          text-[16px] leading-5
          xl:text-[18px] xl:leading-6
        "
        >
          С 14 февраля по 9 марта дарите 3 билета «Мечталлион» через сервис
          «Подари билет» на сайте nloto.ru или приложение «Национальная Лотерея»
          одной покупко...
          <span className="text-[#024cf8] items-end">Подробнее</span>
        </p>
        <button
          className="font-HavalMittel-bold border-2 border-[#2f41b0] w-full py-3 px-5 rounded-[12px] text-white bg-[#2f41b0] mt-2 
          text-[18px] leading-6
          md:max-w-[192px]
          xl:text-[20px]
        "
        >
          Перейти к акции
        </button>
      </div>
    </div>
  );
};
