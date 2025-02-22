import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Map } from '@/shared/components/map';
import { Container } from '@/widgets/container';
import { Mail, Phone } from 'lucide-react';
import React from 'react';

const texts = [
  {
    title: 'текст текст текст:',
    desc: 'текст текст текст, текст текст текст, текст. текст текст текст, текст текст текст.',
  },
  {
    title: 'текст текст текст:',
    desc: 'текст № текст, текст, текст *',
  },
  {
    title: '',
    desc: '* текст, текст текст на текст № текст, текст, текст, будут текст на текст текст текст, текст № текст, текст, текст.',
  },
  {
    title: 'текст-текст «текст текст»:',
    desc: 'текст@тексттекст.текст',
  },
  {
    title: 'текст текст текст:',
    desc: 'текст текст текст, текст текст текст, текст. ',
    desc2: 'текст текст – текст-текст с текст.текст до текст.',
    desc3: 'текст-текст и текст текст – с текст.текст до текст.',
  },
];

const Contacts = () => {
  const breadcrumbItems = [
    { label: 'текст текст', href: '/' },
    { label: 'текст текст текст ', href: '/contacts' },
  ];

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
          текст текст
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
              <p>текст текст текст</p>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <Mail size={14} fill="#0000" stroke="#6A62D2" />
              <p>текст текст текст</p>
            </div>
          </div>
          <div className="text-[16px] leading-5 text-[#364059] font-HavalMittel-medium">
            <p>текст текст текст</p>
            <p>текст текст текст</p>
          </div>
          <Map />
        </div>
        <div
          className="bg-white rounded-[20px] p-4 w-full flex flex-col gap-2
          md:p-6 2xl:p-8 xl:max-w-[334px]
        "
        >
          <h2 className="text-[24px] leading-8 text-[#364059] font-Acrom font-bold">
            текст текст текст
          </h2>
          <p
            className="text-[#364059] font-HavalMittel-regular mb-4
            text-[14px] leading-4
            xl:text-[16px] xl:leading-5
          "
          >
            текст текст текст
          </p>
          <button
            className="whitespace-nowrap w-full border-2 border-[#2f41b0] text-white bg-[#2f41b0] font-HavalMittel-medium py-3 px-5 rounded-[12px] hover:bg-[white] hover:text-[#2f41b0]
            text-[18px] leading-6 max-w-[170px]
            xl:text-[20px] xl:max-w-[185px]
          "
          >
            текст текст текст
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
