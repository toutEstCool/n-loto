import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import React from 'react';

const Feedback = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Контакты', href: '/contacts' },
  ];

  const fields = [
    {
      label: 'Представьтесь',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Номер телефона*',
      name: 'phone',
      type: 'tel',
    },
    {
      label: 'Электронная почта*',
      name: 'email',
      type: 'email',
    },
  ];

  const fields2 = [
    {
      label: 'Цель обращения*',
      name: 'goal',
      type: 'text',
    },
    {
      label: 'Текст вопроса*',
      name: 'question',
      type: 'text',
    },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16 xl:mb-0">
      <div
        style={{
          backgroundImage: 'url(/images/about-bg.png)',
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
          Цель обращения
        </h1>
      </Container>

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full max-w-[1050px]">
          <div className="max-w-[644px] w-full flex flex-col gap-2">
            <h2>У вас есть вопросы?</h2>
            <p>Свяжитесь с нами через форму обратной связи</p>
          </div>
          <form>
            <h2>Личные данные</h2>
            <label htmlFor="">
              Представьтесь
              <input type="text" name="name" id="" />
            </label>
            <label htmlFor="">
              Номер телефона*
              <input type="tel" name="name" id="" />
            </label>
            <label htmlFor="">
              Электронная почта*
              <input type="email" name="name" id="" />
            </label>

            <h2>Цель обращения</h2>
            <label htmlFor="">
              Цель обращения*
              <input type="text" name="name" id="" />
            </label>
            <label htmlFor="">
              Текст вопроса*
              <textarea name="" id=""></textarea>
            </label>
          </form>
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

export default Feedback;
