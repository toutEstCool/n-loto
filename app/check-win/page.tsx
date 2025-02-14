import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import React from 'react';

const CheckWin = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Проверка билета', href: '/about' },
  ];

  return (
    <div className="mt-[74px] sm:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage: 'url(/images/check_win-bg.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-[450px] absolute top-0 left-0 -z-[1]"
      />
      <Container className="pt-3 mb-6 flex flex-col gap-8 text-white">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-bold font-HavalMittel">Проверка билета</h1>
      </Container>

      <Container>
        <div className="max-w-[1050px] w-full flex flex-col items-start gap-6">
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-8  w-full">
            <h2>Проверить билет на сайте</h2>
            <p>Номер билета</p>
            <div>
              <input type="text" name="" id="" />
              <button>Проверить</button>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-8 w-full">
            <h2>Проверить билет быстрее и проще по QR-коду</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckWin;
