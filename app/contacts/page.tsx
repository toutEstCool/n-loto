import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Map } from '@/shared/components/map';
import { Container } from '@/widgets/container';
import { Mail, Phone } from 'lucide-react';
import React from 'react';

const texts = [
  {
    title: 'Юридический адрес:',
    desc: 'Россия, 142210, Московская область, г. Серпухов, Клубный пер., д. 1/2, пом. 203',
  },
  {
    title: 'Почтовый адрес:',
    desc: 'Бокс № 1004, Москва, 109992 *',
  },
  {
    title: '',
    desc: '* Письма, адресованные на адрес а/я № 1, Москва, 115114, будут автоматически переадресованы на почтовый адрес Бокс № 1004, Москва, 109992.',
  },
  {
    title: 'Пресс-служба «Национальной Лотереи»:',
    desc: 'press@nationallottery.ru',
  },
  {
    title: 'Клиентский центр:',
    desc: '115114 г. Москва, ул. Кожевническая, д. 14.',
    desc2: 'Часы работы – Пн-Пт с 9.00 до 21.00',
    desc3: 'Сб-Вс и праздничные дни – с 9.00 до 18.00.',
  },
];

const Contacts = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16 xl:mb-0">
      <div
        style={{
          backgroundImage: 'url(/images/check_win-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[450px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs variant="white" items={breadcrumbItems} />
        <h1
          className="font-bold font-Acrom
                text-[24px] leading-8
                md:text-[28px] 
                xl:text-[36px] xl:leading-[42px]
              "
        >
          Контакты
        </h1>
      </Container>

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full max-w-[1050px]">
          <div className="max-w-[432px] w-full flex flex-col gap-4 xl:gap-[18px]">
            {texts.map((item, index) => (
              <div
                className="text-[#364059] font-HavalMittel-regular
                text-[14px] leading-4
                xl:text-[16px] xl:leading-5
              "
                key={index}
              >
                {item.title && <p>{item.title}</p>}
                {item.desc && <p>{item.desc}</p>}
                {item.desc2 && <p>{item.desc2}</p>}
                {item.desc3 && <p>{item.desc3}</p>}
              </div>
            ))}
          </div>
          <div className="text-[16px] leading-5 text-[#364059] font-HavalMittel-regular">
            <div className="flex items-center gap-2">
              <Phone size={14} fill="#6A62D2" stroke="#0000" />
              <p>8 800 333-7-333</p>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <Mail size={14} fill="#0000" stroke="#6A62D2" />
              <p>support@nloto.ru</p>
            </div>
          </div>
          <div className="text-[16px] leading-5 text-[#364059] font-HavalMittel-medium">
            <p>Оператор лотереи:</p>
            <p>ООО «Спортивные Лотереи»</p>
          </div>
          <Map />
        </div>
        <div
          className="bg-white rounded-[20px] p-4 w-full flex flex-col gap-2
          md:p-6 2xl:p-8 xl:max-w-[334px]
        "
        >
          <h2 className="text-[24px] leading-8 text-[#364059] font-Acrom font-bold">
            У вас есть вопросы?
          </h2>
          <p
            className="text-[#364059] font-HavalMittel-regular mb-4
            text-[14px] leading-4
            xl:text-[16px] xl:leading-5
          "
          >
            Свяжитесь с нами через форму обратной связи
          </p>
          <button
            className="whitespace-nowrap w-full border-2 border-[#2f41b0] text-white bg-[#2f41b0] font-HavalMittel-medium py-3 px-5 rounded-[12px] hover:bg-[white] hover:text-[#2f41b0]
            text-[18px] leading-6 max-w-[170px]
            xl:text-[20px] xl:max-w-[185px]
          "
          >
            Обратная связь
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
