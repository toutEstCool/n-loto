import { cn } from '@/shared/lib/utils';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/widgets/container';
import { Lowerfooter } from './lower-footer';

interface IFooterProps {
  className?: string;
}

const footerData = [
  {
    title: 'Купить лотереи',
    links: [
      {
        title: 'Мечталлион',
        link: '',
      },
      {
        title: 'Форсаж 75',
        link: '',
      },
      {
        title: 'Трижды три',
        link: '',
      },
      {
        title: 'Лавина призов',
        link: '',
      },
      {
        title: '12 добрых дел',
        link: '',
      },
      {
        title: 'Пять-О-Пять',
        link: '',
      },
      {
        title: 'Великолепная 8',
        link: '',
      },
      {
        title: 'Супер 8',
        link: '',
      },
      {
        title: 'Большая 8',
        link: '',
      },
      {
        title: 'Премьер',
        link: '',
      },
      {
        title: 'Топ 12',
        link: '',
      },
      {
        title: '5 из 36',
        link: '',
      },
      {
        title: '4x4',
        link: '',
      },
      {
        title: 'Цветные шары',
        link: '',
      },
      {
        title: 'Турнир',
        link: '',
      },
      {
        title: 'Трилогия',
        link: '',
      },
      {
        title: 'Моментальные лотереи',
        link: '',
      },
    ],
  },
  {
    title: 'Лотерейные билеты',
    links: [
      {
        title: 'Победители',
        link: '',
      },
    ],
  },
  {
    title: 'Компания',
    links: [
      {
        title: 'О компании',
        link: '',
      },
      {
        title: 'Контакты',
        link: '',
      },
      {
        title: 'Обратная связь',
        link: '',
      },
      {
        title: 'Вопросы и ответы',
        link: '',
      },
      {
        title: 'Пресс-центр',
        link: '',
      },
      {
        title: 'Франчайзинг',
        link: '',
      },
      {
        title: 'Благотворительность',
        link: '',
      },
    ],
  },
  {
    title: 'Информация',
    links: [
      {
        title: 'Скачать мобильное приложение',
        link: '',
      },
      {
        title: 'Карта продаж',
        link: '',
      },
      {
        title: 'Как получить выигрыш',
        link: '',
      },
      {
        title: 'Архив тиражей',
        link: '',
      },
    ],
  },
];

export const Footer: React.FC<IFooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className={cn('bg-[#F2F4FF] min-h-screen py-8', className)}>
      {/* <div className="sticky h-10 z-[1] top-0 left-0">lol this is logo</div> */}
      <Container>
        <div className="flex">
          <div className="grid grid-cols-4 text-[#364059]">
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
                    {link.title}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="max-w-[314px]">
            <h3 className="mb-4 text-2xl font-bold text-[#364059] font-HavalMittel">
              Способы оплаты
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
            <p className="text-[15px] leading-[20px] text-[#5e6976] mb-6">
              Официальный сайт «Национальная Лотерея» гарантирует безопасность
              всех способов оплаты и не сохраняет ваши данные.
            </p>
            <div className="flex gap-3">
              <Image
                src={'/icons/vk.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '32px',
                  maxHeight: '44px',
                }}
              />
              <Image
                src={'/icons/odnoklassniki.svg'}
                alt="visa logo"
                className="object-fit"
                width={60}
                height={44}
                sizes="(max-width: 768px) 88px, (max-width: 1280px) 110px, 110px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '32px',
                  maxHeight: '44px',
                }}
              />
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
                  maxHeight: '44px',
                }}
              />
            </div>
          </div>
        </div>

        <Lowerfooter />
      </Container>
    </footer>
  );
};
