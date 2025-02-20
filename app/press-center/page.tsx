import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import React from 'react';

const PressCenter = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Пресс-центр', href: '/press-center' },
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
          Новости
        </h1>
      </Container>

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full max-w-[1050px]"></div>
      </Container>
    </div>
  );
};

export default PressCenter;
