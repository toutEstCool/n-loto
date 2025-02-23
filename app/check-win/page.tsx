import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import { HelpCircle, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CheckWin = () => {
  const breadcrumbItems = [
    { label: 'текст', href: '/' },
    { label: ' текст текст', href: '/check-win' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative">
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
        <div className="max-w-[1050px] w-full flex flex-col items-start gap-6">
          <div className="bg-white rounded-[20px] p-4 xl:p-6 2xl:p-8 flex flex-col gap-1 w-full">
            <h2
              className="font-HavalMittel-regular mb-1 text-[#364059]
              text-[18px] leading-6
              md:text-[28px] md:leading-8
            "
            >
              текст текст текст текст текст текст
            </h2>
            <div className="flex gap-2">
              <p
                className="text-[#364059] font-HavalMittel-regular
                text-[16px] leading-5
                xl:text-[18px] xl:leading-6
              "
              >
                текст текст текст
              </p>
              <div>
                <HelpCircle
                  width={20}
                  height={20}
                  fill="#CBD1DA"
                  stroke="#fff"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                className="border border-[#b9c1cd] p-3 max-w-[481px] w-full rounded-[8px] text-[16px] leading-5 font-medium"
                type="text"
                name=""
                id=""
              />
              <button
                className="border-2 border-[#2f41b0] bg-[#2f41b0] px-16 py-3 text-white font-HavalMittel-medium rounded-[12px]
                md:text-[18px] leading-6
                xl:text-[20px]
              "
              >
                текст
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4 xl:p-6 2xl:p-8 flex flex-col md:gap-6 xl:gap-8 w-full">
            <h2
              className="font-HavalMittel-medium mb-1 text-[#364059]
              text-[18px] leading-6
              md:text-[28px] md:leading-8
            "
            >
              текст текст текст текст текст текст текст текст текст
            </h2>
            <div className="relative">
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="qr"
                width={1000}
                height={1000}
                className="md:block hidden max-h-[400px] rounded-[12px]"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <Image
                src="https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg"
                alt="qr"
                width={1000}
                height={1000}
                className="md:hidden max-h-[400px] rounded-[12px]"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div
                className=" md:absolute md:right-0 md:top-0 md:max-w-[324px] lg:max-w-[432px] rounded-[12px]"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
                  backgroundSize: '100% 100%',
                }}
              >
                <div
                  className="p-6 text-[#fff] flex flex-col justify-between h-[100%]
                  lg:w-[80%]
                "
                >
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-HavalMittel-regular
                      text-[20px] leading-6
                      xl:text-[28px] xl:leading-8
                    "
                    >
                      текст текст текст текст
                    </h3>
                    <button className="w-full bg-[#3ddb85] xl:hidden px-5 py-3 text-[18px] leading-6 rounded-[12px] font-HavalMittel-medium">
                      текст текст текст
                    </button>
                    <p className="hidden xl:flex">текст текст текст</p>
                    <Image
                      src="/icons/QR.svg"
                      alt="qr"
                      className="hidden xl:block"
                      width={100}
                      height={100}
                    />
                  </div>
                  <ul className="flex mt-[50px] md:mt-0 lg:hidden xl:flex flex-col gap-1">
                    {[
                      'текст текст текст ',
                      'текст текст текст текст текст',
                      'текст текст текст текст',
                    ].map((item, index) => (
                      <li key={index} className="flex gap-2 ">
                        <Star
                          width={8}
                          height={8}
                          fill="#fff"
                          stroke="#fff"
                          className="rotate-[15deg] opacity-[0.8] mt-[5px]"
                        />
                        <p
                          className="w-[140px] md:w-full  font-HavalMittel-regular text-[#ddd]
                          text-[16px] leading-5
                          md:text-lg md:leading-6
                        "
                        >
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundSize: '100% 100%',
              width: '100%',
            }}
            className="mb-16 max-w-[1440px] rounded-[12px] h-[477px] md:h-[323px] bg-[url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)] md:bg-[url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)]"
          >
            <div className="p-11 md:max-w-[310px] lg:max-w-[577px] w-full h-full flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-white">
                <Image
                  src="/icons/newLogo.png"
                  alt="banner"
                  width={1000}
                  height={1000}
                  className="max-w-[246px] w-full max-h-[42px] mb-2 hidden md:block"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3
                  className="font-HavalMittel-regular
                  md:text-[24px] md:leading-8
                  lg:text-[28px] lg:leading-8
                  "
                >
                  текст текст текст
                </h3>
                <ul>
                  {[
                    'текст текст текст текст текст текст ',
                    'текст текст текст текст текст текст ',
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2 ">
                      <Star
                        width={8}
                        height={8}
                        fill="#fff"
                        stroke="#fff"
                        className="rotate-[15deg] opacity-[0.8] mt-[5px]"
                      />
                      <p
                        className="font-HavalMittel-regular text-[#fff90]
                        md:text-[16px] md:leading-5
                        lg:text-lg lg:leading-6
                      "
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto md:mt-0 py-3 px-5 border-2 border-white text-white text-[20px] leading-6 font-medium rounded-[12px]">
                текст
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckWin;
