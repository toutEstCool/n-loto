import Image from 'next/image';
import React from 'react';
import { footerData } from '../consts';
import Link from 'next/link';

export const UpperFooter = () => {
  return (
    <div className="flex">
      <div className="grid-cols-4 text-[#364059] hidden xl:grid">
        {footerData.map((list) => (
          <ul className="mx-3" key={list.title}>
            <li className="mb-4 text-2xl font-bold font-HavalMittel">
              {list.title}
            </li>
            {list.links.map((link) => (
              <li
                key={link.title}
                className="mb-4 text-lg leading-6 font-normal hover:font-medium"
              >
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="max-w-[340px] ml-auto flex flex-col gap-6 w-full">
        <div className="max-w-[314px]">
          <h3
            className="
            font-bold text-[#364059] font-HavalMittel
            mb-1 text-[24px] leading-6
            "
          >
            текст текст текст
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
            Текст, текст, текст, текст, текст, текст, текст, текст, текст,
            текст, текст, текст, текст, текст, текст, текст, текст, текст, текст
          </p>
        </div>
        <div className="flex gap-3">
          <Image src={'/icons/vk.svg'} alt="visa logo" width={32} height={32} />
          <Image
            src={'/icons/odnoklassniki.svg'}
            alt="ok logo"
            width={32}
            height={32}
          />
          <Image src={'/icons/tg.svg'} alt="visa logo" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};
