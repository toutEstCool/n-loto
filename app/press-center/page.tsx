import { getNews } from '@/sanity/lib/sanity';
import { NewsType } from '@/sanity/schemaTypes/newsPostType';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { PressCenterContent } from '@/shared/components/press-center-content';
import { Container } from '@/widgets/container';
import React, { Suspense } from 'react';

const PressCenter = async () => {
  const breadcrumbItems = [
    { label: 'текст текст', href: '/' },
    { label: 'текст текст', href: '/press-center' },
  ];

  const news: NewsType[] = await getNews();

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16 xl:mb-0">
      <div
        style={{
          backgroundImage:
            'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
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
          текст текст текст
        </h1>
      </Container>

      <Container className="flex flex-col gap-6">
        <Suspense fallback={<div></div>}>
          <PressCenterContent news={news} />
        </Suspense>
      </Container>
    </div>
  );
};

export default PressCenter;
