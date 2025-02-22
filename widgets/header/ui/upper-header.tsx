import { Container } from '@/widgets/container';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export const UpperHeader = () => {
  return (
    <div className="hidden md:block bg-[#A8A5AD] py-1 px-4 text-[12px] font-bold xl:text-[13.5px]">
      <Container>
        <div className="flex justify-between">
          <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8 xl:font-HavalMittel-regular xl:text-[16px]">
            <li className="hover:text-white">Текст, текст</li>
            <li className="hover:text-white">
              <Link href={'/about'}>О компании</Link>
            </li>
          </ul>
          <div className="xl:font-HavalMittel-regular xl:text-[16px]">
            <a href="tel:" className="flex items-center gap-2">
              <Phone color="#0000" fill="#fff" size={14} />
              <p className="text-white xl:block hidden">
                Текст, текст, текст, текст, текст
              </p>
              <p className="text-white">Текст, текст, текст</p>
            </a>
          </div>
          <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8 xl:font-HavalMittel-regular xl:text-[16px]">
            <li className="hover:text-white">
              <Link href={'/check-win'}>Проверить билет</Link>
            </li>
            <li className="hover:text-white">
              <Link href={'/get-lottery-win'}>Как получить выигрыш</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
