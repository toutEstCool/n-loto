import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const data = [
  {
    title: 'Текст, текст, текст',
    link: '',
  },
  {
    title: 'Текст, текст, текст',
    link: '',
  },
  {
    title: 'Текст, текст, текст',
    link: '',
  },
  {
    title: 'Текст, текст, текст',
    link: '',
  },
];

export const Lowerfooter = () => {
  return (
    <>
      <div className="grid grid-cols-[358px_1fr_360px] mt-9">
        <div className="flex flex-col gap-6">
          <Link href={'/'}>
            <Image
              src={'/icons/newLogo.png'}
              alt="visa logo"
              className="object-fit"
              width={60}
              height={44}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '240px',
                maxHeight: '54px',
              }}
            />
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src={
                'https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg'
              }
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
            <p className="w-[170px] text-base leading-5 text-[#5e6976]">
              текст текст текст текст текст текст текст
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#2f41b0] text-[28px] leading-8 font-HavalMittel-bold mt-4">
            текст текст: текст текст текст
          </p>
          <div className="max-w-[543px] flex flex-col gap-4 text-[20px] leading-6 font-HavalMittel-regular">
            <div className="flex items-center gap-2">
              <Image src={'/icons/tg.svg'} alt="tg" width={32} height={32} />
              <p>текст текст текст</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/mail.svg" alt="mail" width={32} height={32} />
              <p>текст текст текст</p>
            </div>
          </div>
          <div className="text-[16px] leading-5 text-[#5e6976] font-HavalMittel-regular mt-6">
            <p>
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст.
            </p>
            <p>
              Сведения о рекламодателе: текст текст (текст текст, текст текст).
            </p>
          </div>
        </div>
        <div className=" hidden xl:flex xl:gap-4 xl:ml-[46px] xl:relative">
          <Image
            src={'/icons/appstore.svg'}
            alt="visa logo"
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
            className="absolute top-1/4 right-[0px]"
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
        <p className="mt-auto flex">©2021-2024 текст текст текст</p>
        <div className="flex flex-col gap-1 sm:flex-wrap sm:flex-row gap-x-10 text-base leading-5 font-HavalMittel">
          {data.map((item) => (
            <p
              key={item.title}
              className="text-[16px] leading-5 text-[#2f41b0] font-HavalMittel-regular"
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
