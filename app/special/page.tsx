import React from 'react';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { SpecialCard } from '@/shared/components/special-card';
import { Container } from '@/widgets/container';
import { getSpecials } from '@/sanity/lib/sanity';

const Special = async () => {
  const breadcrumbItems = [
    { label: 'текст текст', href: '/' },
    { label: 'текст текст текст', href: '/special' },
  ];

  const specials = await getSpecials();

  return (
    <Container className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen ">
      <div className="pt-3 mt-6">
        <Breadcrumbs variant="black" items={breadcrumbItems} />
      </div>

      <div
        className="bg-[white] flex flex-col rounded-[20px] mt-8
        p-4 gap-4
        md:p-6 md:gap-8
        2xl:p-8
      "
      >
        <h1
          className="font-medium font-Acrom text-[#364059]
          text-[28px] leading-[32px]
          md:text-[36px] md:leading-[42px]
          xl:text-[42px] xl:leading-[52px]
        "
        >
          текст текст
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {specials.map((special: any, index: number) => (
            <SpecialCard key={index} special={special} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Special;
