import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { FaqItem } from '@/shared/components/faq-item';
import { Container } from '@/widgets/container';
import React from 'react';

const faqItems = [
  {
    title: 'О компании',
    children: [
      {
        title: 'Кто является организатором лотереи?',
        content: [
          'В соответствии с распоряжением Правительства Российской Федерации от 29 августа 2019 г. N 1921-р организатором всероссийских государственных лотерей в поддержку развития бокса является Министерство финансов Российской Федерации, а оператором — ООО «Спортивные Лотереи».',
        ],
      },
      {
        title: 'Как узнать полную информацию об организаторе?',
        content: [
          'Организатором лотереи является Министерство финансов Российской Федерации.',
          'Место нахождения Организатора: Россия, 109097, г. Москва, ул. Ильинка, д.9.',
          'Телефон: +7 495 987-91-01',
          'Сайт: minfin.ru',
          'Оператор лотереи: ООО «Спортивные Лотереи»',
          'Тел: 8 800 333-7-333',
        ],
      },
      {
        title: 'Как и чем законодательно регулируется ваша деятельность?',
        content: [
          'Деятельность ООО «Спортивные Лотереи» осуществляется в соответствии с действующим законодательством Российской Федерации и регулируется Федеральным законом от 11 ноября 2003 г. № 138-ФЗ «О лотереях».',
        ],
      },
      {
        title: 'В каких целях проводится Национальная лотерея?',
        content: [
          'Государственные лотереи России проводятся в целях финансирования социально значимых объектов и мероприятий, в том числе мероприятий по развитию физической культуры и спорта, спорта высших достижений и системы подготовки спортивного резерва.',
          'Целью проведения лотереи является финансирование развития бокса.',
        ],
      },
    ],
  },
  {
    title: 'О лотереях',
    children: [
      {
        title: 'Кто может принять участие в лотереях?',
        content: [
          'Участником лотереи может быть лицо, достигшее возраста 18 лет.',
        ],
      },
      {
        title: 'Какие бывают лотереи?',
        content: [
          'Лотереи в зависимости от способа их проведения бывают тиражные и моментальные (бестиражные).',
          'Тиражной называется лотерея, в которой розыгрыш призового фонда между всеми участниками проводится единовременно после распространения лотерейных билетов.',
          'Моментальная (бестиражная) лотерея – лотерея, в которой информация, позволяющая определить выигрыши, закладывается в лотерейные билеты на стадии их изготовления.',
        ],
      },
    ],
  },
  {
    title: 'Мобильное приложение',
    content: [
      'Установка мобильного приложения Android уведомляет, что файл может быть опасным. Что делать?',
      'Подобное уведомление – часть стандартных настроек безопасности смартфона. С файлом всё в порядке: он такой же, как в магазине приложений, просто устанавливается Вами вручную. Чтобы установить приложение, нажмите “Всё равно скачать”.',
      'Что делать, если браузер блокирует установку из неизвестного источника?',
      'Это автоматическое предупреждение. Нажмите “Разрешить установку”.',
      'Приложение не получается установить. Что делать?',
      'При возникновении вопросов обратитесь в нашу поддержку по номеру телефона ',
      '8 800 333-7-333',
    ],
    children: [],
  },
  {
    title: 'Выигрыш',
    content: [],
    children: [
      {
        title: 'Где и как получить выигрыш?',
        content: [
          'Выигрыш можно получить различными способами в точках продаж, личном кабинете на сайте или мобильном приложении. Детали о порядке и условиях получения выигрыша здесь: «Как получить выигрыш»',
        ],
      },
      {
        title: 'При выигрыше я получаю всю сумму полностью?',
        content: [
          'В соответствии с Налоговым кодексом Российской Федерации выигрыш в лотерею является налогооблагаемым доходом.',
          'Для налоговых резидентов РФ ставка налога составляет:',
          `•	13% - если сумма налоговых баз за налоговый период менее или равна 2,4 млн. руб.
          •	312 тысяч рублей и 15% суммы налоговых баз, превышающей 2,4 млн. руб., - если сумма налоговых баз за налоговый период превышает 2,4 млн. руб. и составляет не более 5 млн. руб.;
          •	702 тысячи рублей и 18% суммы налоговых баз, превышающей 5 млн. руб., - если сумма налоговых баз за налоговый период превышает 5 млн. руб. и составляет не более 20 млн. руб.;
          •	3402 тысячи рублей и 20% суммы налоговых баз, превышающей 20 млн. руб., - если сумма налоговых баз за налоговый период превышает 20 млн. руб. и составляет не более 50 млн. руб.;
          •	9402 тысячи рублей и 22% суммы налоговых баз, превышающей 50 млн. руб., - если сумма налоговых баз за налоговый период превышает 50 млн. руб..`,
          'Для нерезидентов РФ ставка налога составляет 30%.',
        ],
      },
    ],
  },
];

const Faq = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Моментальные лотереи', href: '/get-lottery-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/check_win-bg.png)',
        }}
        className="w-full  absolute top-0 left-0 -z-[1]
          bg-cover h-[345px] bg-[-75%_0%]
          sm:bg-[center]
          xl:h-[380px]
          "
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs variant="white" items={breadcrumbItems} />
        <h1
          className="font-Acrom 
                text-[24px] leading-8 font-medium
                md:text-[28px] md:leading-8 md:font-medium
                xl:text-4xl xl:font-bold
              "
        >
          Моментальные лотереи
        </h1>
      </Container>
      <Container>
        <div
          className=" bg-white rounded-[20px]
            p-4 
            md:p-6 
            xl:p-8
          "
        >
          <div className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <FaqItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
