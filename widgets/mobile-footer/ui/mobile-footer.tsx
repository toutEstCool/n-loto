import { Container } from '@/widgets/container';
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

export const MobileFooter = () => {
  return (
    <footer className="xl:hidden pt-6 pb-[84px]">
      <Container>
        <div className="flex justify-between flex-col sm:flex-row gap-6">
          <div className="max-w-[314px]">
            <h3
              className="
                  font-bold text-[#364059] font-HavalMittel
                  mb-1 text-[20px] leading-6
                  "
            >
              {/* Способы оплаты */}
              Текст текст текст
            </h3>
            <div className="flex">
              <Image
                src={'/icons/visa2.svg'}
                alt="visa logo"
                width={60}
                height={44}
                className="object-contain"
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '60px',
                  maxHeight: '44px',
                }}
              />
              <Image
                src={'/icons/mastercard.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '60px',
                  maxHeight: '44px',
                }}
              />
              <Image
                src={'/icons/mir.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '60px',
                  maxHeight: '44px',
                }}
              />
            </div>
            <p
              className="
                  text-[#5e6976] font-HavalMittel-regular
                  mb-1 text-[14px] leading-4
                  "
            >
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src={'/icons/android.svg'}
              alt="visa logo"
              className="object-fit"
              width={130}
              height={40}
            />
            <div className="flex gap-3">
              <Image
                src={'/icons/vk.svg'}
                alt="visa logo"
                className="object-fit"
                width={32}
                height={32}
              />
              <Image
                src={'/icons/odnoklassniki.svg'}
                alt="visa logo"
                className="object-fit"
                width={32}
                height={32}
              />
              <Image
                src={'/icons/tg.svg'}
                alt="visa logo"
                className="object-fit"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <Image
              src={'/icons/newLogo.png'}
              alt="logo"
              width={240}
              height={54}
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="max-w-[240px]"
            />
            <p className="text-[#2f41b0] text-[24px] leading-8 font-HavalMittel-bold mt-4">
              текст текст <br className="sm:hidden" /> текст текст
            </p>
          </div>
          <Image
            src={'/icons/18+.svg'}
            alt="18+"
            width={100}
            height={100}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="max-w-[32px] sm:max-w-[50px]"
          />
        </div>
        <div className="max-w-[512px] flex sm:items-center justify-between mt-6 flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-2">
            <Image src={'/icons/tg.svg'} alt="tg logo" width={24} height={24} />
            <p className="text-[18px] leading-6 text-[#364059] font-HavalMittel-regular">
              текст текст
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={'/icons/mail.svg'} alt="mail" width={24} height={32} />
            <p className="text-[18px] leading-6 text-[#364059] font-HavalMittel-regular">
              текст текст
            </p>
          </div>
        </div>
        <div className="text-[14px] leading-4 text-[#5e6976] font-HavalMittel-regular mt-6">
          <p>
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст
          </p>
          <p>
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:flex-wrap gap-x-10 text-base leading-5 font-HavalMittel mt-6">
          {data.map((item) => (
            <p
              key={item.title}
              className="text-[14px] leading-4 text-[#2f41b0] font-HavalMittel-regular"
            >
              {/* {item.title} */} текст текст текст
            </p>
          ))}
        </div>
        <div className="flex sm:items-center justify-between mt-6 flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={
                'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
              }
              alt="r"
              width={33}
              height={33}
            />
            <div className="w-[1px] h-5 bg-[#5e6976]" />
            <p className="w-[170px] text-[14px] leading-4 text-[#5e6976] font-HavalMittel-regular">
              {/* Организатор лотереи Минфин России */}
              текст текст текст текст текст текст
            </p>
          </div>
          <p className="text-[14px] leading-4 text-[#5e6976] font-HavalMittel-regular">
            {/* ©2021-2024 ООО «Спортивные Лотереи» */}
            текст текст текст текст
          </p>
        </div>
      </Container>
    </footer>
  );
};
