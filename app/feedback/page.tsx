import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { FileUpload } from '@/shared/components/file-upload';
import { Container } from '@/widgets/container';
import React from 'react';

const CustomInput = () => {
  return (
    <input
      type="text"
      name="name"
      id=""
      className="border border-[#d6d6d6] bg-white rounded-[8px] p-3 h-10
        text-[16px] leading-5
      "
    />
  );
};

const Feedback = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Обратная связь', href: '/feedback' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16 xl:mb-0">
      <div
        style={{
          backgroundImage: 'url(/images/feedback-bg.png)',
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
          Обратная связь
        </h1>
      </Container>

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full max-w-[1050px]">
          <div className="max-w-[644px] w-full flex flex-col gap-2">
            <h2 className="font-Acrom font-medium text-[24px] leading-8 text-[#364059]">
              У вас есть вопросы?
            </h2>
            <p
              className="font-HavalMittel-medium text-[#364059]
              text-[16px] leading-5
              "
            >
              Свяжитесь с нами через форму обратной связи
            </p>
          </div>
          <form>
            <h2
              className="font-Acrom font-medium text-[#364059]
              text-[24px] leading-8 mb-8
            "
            >
              Личные данные
            </h2>
            <div className="max-w-[310px] flex flex-col gap-8">
              <label
                className="flex flex-col gap-1 text-[#101820]
              text-[14px] leading-4 
            "
              >
                Представьтесь
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                Номер телефона*
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                Электронная почта*
                <CustomInput />
              </label>
            </div>

            <div className="mt-16 max-w-[644px] flex flex-col gap-4">
              <h2
                className="font-Acrom font-medium text-[#364059]
              text-[24px] leading-8 mb-8
            "
              >
                Цель обращения
              </h2>
              <label
                className="max-w-[310px] flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                Цель обращения*
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                Текст вопроса*
                <textarea
                  name=""
                  id=""
                  className="h-[116px] border border-[#d6d6d6] bg-white rounded-[8px] p-3
                  text-[16px] leading-5
                "
                ></textarea>
              </label>
            </div>
          </form>
          <div className="mt-8 max-w-[644px] flex flex-col gap-2">
            <h2 className="text-[14px] leading-4 font-HavalMittel-medium">
              Файл
            </h2>
            <p className="text-[#929eab] text-[14px] leading-5">
              Вы можете прикрепить не более 5 файлов общим размером не более
              20мб
            </p>
            <div>
              <button className="text-[#024cf8] font-HavalMittel-medium text-[14px] leading-5">
                Доступные форматы файлов
              </button>
            </div>
            <FileUpload />
          </div>
          <div className="mt-8">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 appearance-none border border-[#5e6976] rounded-[4px] checked:bg-[#364059] checked:border-transparent focus:outline-none"
              />
              <p className="text-[#364059] text-[14px] leading-4 font-HavalMittel-medium">
                Я согласен c <span className="text-[#024cf8]">политикой</span>{' '}
                обработки данных
              </p>
            </label>
          </div>
          <button
            className="mb-12 md:mb-16 bg-[#2f41b0] text-white py-3 px-5 font-HavalMittel-medium border-2 border-[#2f41b0] md:max-w-[136px]
            text-[20px] leading-6 rounded-[12px]
          "
          >
            Отправить
          </button>
          <p className="text-[#5e6976] text-[14px] leading-4 font-HavalMittel-regular">
            *Обязательные поля для заполнения
          </p>
        </div>
        <div
          className="bg-white rounded-[20px] p-4 w-full flex flex-col gap-2
          md:p-6 2xl:p-8 xl:max-w-[334px]
        "
        >
          <h2 className="text-[24px] leading-8 text-[#364059] font-Acrom font-bold">
            Контакты
          </h2>
          <div
            className="text-[#364059] font-HavalMittel-regular mb-4 flex flex-col gap-[18px]
            text-[14px] leading-4
            xl:text-[16px] xl:leading-5
          "
          >
            <div>
              <p>Юридический адрес:</p>
              <p>
                Россия, 142210, Московская область, г. Серпухов, Клубный пер.,
                д. 1/2, пом. 203
              </p>
            </div>
            <div>
              <p>Почтовый адрес:</p>
              <p>Бокс № 1004, Москва, 109992 *</p>
            </div>
            <div>
              <p>
                * Письма, адресованные на адрес а/я № 1, Москва, 115114, будут
                автоматически переадресованы на почтовый адрес Бокс № 1004,
                Москва, 109992.
              </p>
            </div>
            <div>
              <p>Пресс-служба «Национальной Лотереи»:</p>
              <p>press@nationallottery.ru</p>
            </div>
            <div>
              <p>Клиентский центр:</p>
              <p>115114 г. Москва, ул. Кожевническая, д. 14.</p>
              <p>Часы работы – Пн-Пт с 9.00 до 21.00</p>
              <p>Сб-Вс и праздничные дни – с 9.00 до 18.00.</p>
            </div>
            <div>
              <p className="font-HavalMittel-medium text-[16px] leading-5">
                Телефон:
              </p>
              <p>8 800 333-7-333</p>
            </div>
            <div>
              <p className="font-HavalMittel-medium text-[16px] leading-5">
                E-mail:
              </p>
              <p>support@nloto.ru</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
