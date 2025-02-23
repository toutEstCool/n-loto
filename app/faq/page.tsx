import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { FaqItem } from '@/shared/components/faq-item';
import { Container } from '@/widgets/container';
import React from 'react';

const faqItems = [
  {
    title: 'текст текст текст',
    children: [
      {
        title: 'текст текст текст?',
        content: [
          'текст текст текст текст текст текст текст текст текст текст текст текст текст текст.',
        ],
      },
      {
        title: 'текст текст текст текст?',
        content: [
          'текст текст текст текст текст.',
          'текст текст текст текст, текст, текст.',
          'текст: текст текст-текст-текст',
          'текст: текст.текст',
          'текст текст текст: текст текст текст',
        ],
      },
      {
        title: 'текст текст текст?',
        content: [
          'текст текст текст текст текст текст текст текст текст текст.',
        ],
      },
      {
        title: 'текст текст текст текст?',
        content: [
          'текст текст текст текст текст, текст текст текст текст текст.',
          'текст текст текст текст текст текст текст.',
        ],
      },
    ],
  },
  {
    title: 'текст текст текст',
    children: [
      {
        title: 'текст текст текст?',
        content: ['текст текст текст текст текст.'],
      },
      {
        title: 'текст текст текст?',
        content: [
          'текст текст текст текст текст текст.',
          'текст текст текст текст текст.',
          'текст текст текст текст текст.',
        ],
      },
    ],
  },
  {
    title: 'текст текст текст',
    content: [
      'текст текст текст текст текст текст.',
      'текст текст текст – текст текст текст.',
      'текст текст текст текст.',
      'текст текст текст.',
    ],
    children: [],
  },
  {
    title: 'текст текст',
    content: [],
    children: [
      {
        title: 'текст текст текст?',
        content: [
          'текст текст текст текст текст текст текст текст текст текст.',
        ],
      },
      {
        title: 'текст текст текст текст?',
        content: [
          'текст текст текст текст текст текст текст текст текст текст.',
          'текст текст текст текст текст текст текст текст текст текст.',
          'текст текст текст текст текст текст текст текст текст.',
          'текст текст текст текст текст текст текст текст текст.',
          'текст текст текст текст текст текст текст.',
        ],
      },
    ],
  },
];

const Faq = () => {
  const breadcrumbItems = [
    { label: 'текст', href: '/' },
    { label: 'текст текст текст', href: '/faq' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
      <div
        style={{
          backgroundImage:
            'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
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
          текст текст текст
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
            {faqItems.map((item, index) => (
              <FaqItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
