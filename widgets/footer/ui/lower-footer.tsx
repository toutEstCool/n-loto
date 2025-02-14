import Image from 'next/image';
import React from 'react';

const data = [
  {
    title: 'Политика обработки персональных данных',
    link: '',
  },
  {
    title: 'Правила программы лояльности',
    link: '',
  },
  {
    title: 'Обработка персональных данных третьими лицами',
    link: '',
  },
  {
    title: 'Договор-оферта для участников лотерей',
    link: '',
  },
];

export const Lowerfooter = () => {
  return (
    <>
      <div className="grid grid-cols-[358px_1fr_360px]">
        <div>
          <Image
            src={'/logo.svg'}
            alt="visa logo"
            className="object-fit"
            width={60}
            height={44}
            sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '240px',
              maxHeight: '54px',
            }}
          />
          <div className="flex items-center gap-3">
            <Image
              src={'/icons/rus_logo.svg'}
              alt="visa logo"
              className="object-fit"
              width={60}
              height={44}
              sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '33px',
                maxHeight: '33px',
              }}
            />
            <div className="w-[2px] h-5 bg-[#5e6976]" />
            <p className="w-[170px] text-base leading-5">
              Организатор лотереи Минфин России
            </p>
          </div>
          {/* <p className="mt-auto">©2021-2024 ООО «Спортивные Лотереи»</p> */}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[28px] leading-8 font-bold font-HavalMittel">
            Горячая линия: 8 800 333-7-333
          </p>
          <div className="max-w-[543px] flex justify-between text-[20px] leading-6 font-HavalMittel">
            <div className="flex items-center gap-2">
              <Image
                src={'/icons/tg.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '32px',
                  maxHeight: '32px',
                }}
              />
              <p>Служба поддержки</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={'/icons/mail.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '33px',
                  maxHeight: '33px',
                }}
              />
              <p>support@nloto.ru</p>
            </div>
          </div>
          <div>
            <p className="text-base leading-5 text-[#5e6976] font-HavalMittel">
              Лотереи проводятся на основании распоряжения Правительства
              Российской Федерации от 29 августа 2019 г. № 1921-р. Организатор
              лотерей: Министерство финансов Российской Федерации. Оператор
              лотерей: ООО «Спортивные Лотереи». Тел. 8 800 333-7-333.
            </p>
            <p>
              Сведения о рекламодателе: ООО «Спортивные Лотереи» (ОГРН
              1195027010386, ИНН 5003133760).
            </p>
          </div>
        </div>
        <div className="flex gap-4 ml-[46px] relative">
          <Image
            src={'/icons/appstore.svg'}
            alt="visa logo"
            className="object-fit"
            width={60}
            height={44}
            sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '130px',
              maxHeight: '40px',
            }}
          />
          <Image
            src={'/icons/android.svg'}
            alt="visa logo"
            className="object-fit"
            width={60}
            height={44}
            sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '130px',
              maxHeight: '40px',
            }}
          />
          <Image
            src={'/icons/18+.svg'}
            alt="visa logo"
            className="absolute top-1/4 -right-[20px]"
            width={60}
            height={44}
            sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '50px',
              maxHeight: '50px',
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-[358px_1fr_360px] mt-4">
        <p>©2021-2024 ООО «Спортивные Лотереи»</p>
        <div className="flex flex-wrap gap-x-10 text-base leading-5 font-HavalMittel">
          {data.map((item, index) => (
            <p key={item.title}>{item.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};
