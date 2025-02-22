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
    { label: 'текст текст', href: '/' },
    { label: 'текст текст текст', href: '/feedback' },
  ];

  return (
    <div className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen relative mb-16 xl:mb-0">
      <div
        style={{
          backgroundImage:
            'url(https://photogora.ru/img/product/big/4947/5d2ef838a9cc69778828569119077791.jpg)',
        }}
        className="w-full h-[400px] md:h-[450px] bg-[90%_0%] bg-[cover] md:bg-[cover] absolute top-0 left-0 -z-[1]"
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

      <Container className="flex flex-col xl:items-start xl:flex-row gap-6">
        <div className="bg-white rounded-[20px] p-4 md:p-6 2xl:p-8 flex flex-col gap-8 w-full max-w-[1050px]">
          <div className="max-w-[644px] w-full flex flex-col gap-2">
            <h2 className="font-Acrom font-medium text-[24px] leading-8 text-[#364059]">
              текст текст текст
            </h2>
            <p
              className="font-HavalMittel-medium text-[#364059]
              text-[16px] leading-5
              "
            >
              текст текст текст текст текст текст текст
            </p>
          </div>
          <form>
            <h2
              className="font-Acrom font-medium text-[#364059]
              text-[24px] leading-8 mb-8
            "
            >
              текст текст текст
            </h2>
            <div className="max-w-[310px] flex flex-col gap-8">
              <label
                className="flex flex-col gap-1 text-[#101820]
              text-[14px] leading-4 
            "
              >
                текст текст текст
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                текст текст текст
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                текст текст текст
                <CustomInput />
              </label>
            </div>

            <div className="mt-16 max-w-[644px] flex flex-col gap-4">
              <h2
                className="font-Acrom font-medium text-[#364059]
              text-[24px] leading-8 mb-8
            "
              >
                текст текст текст
              </h2>
              <label
                className="max-w-[310px] flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                текст текст текст
                <CustomInput />
              </label>
              <label
                className="flex flex-col gap-1 text-[#101820]
                text-[14px] leading-4 
              "
              >
                текст текст текст
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
              текст
            </h2>
            <p className="text-[#929eab] text-[14px] leading-5">
              текст текст текст текст текст текст текст текст текст текст текст
              текст
            </p>
            <div>
              <button className="text-[#024cf8] font-HavalMittel-medium text-[14px] leading-5">
                текст текст текст
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
                текст текст <span className="text-[#024cf8]">текст текст</span>{' '}
                текст текст текст
              </p>
            </label>
          </div>
          <button
            className="mb-12 md:mb-16 bg-[#2f41b0] text-white py-3 px-5 font-HavalMittel-medium border-2 border-[#2f41b0] md:max-w-[136px]
            text-[20px] leading-6 rounded-[12px]
          "
          >
            текст
          </button>
          <p className="text-[#5e6976] text-[14px] leading-4 font-HavalMittel-regular">
            текст текст текст текст
          </p>
        </div>
        <div
          className="bg-white rounded-[20px] p-4 w-full flex flex-col gap-2
          md:p-6 2xl:p-8 xl:max-w-[334px]
        "
        >
          <h2 className="text-[24px] leading-8 text-[#364059] font-Acrom font-bold">
            текст текст
          </h2>
          <div
            className="text-[#364059] font-HavalMittel-regular mb-4 flex flex-col gap-[18px]
            text-[14px] leading-4
            xl:text-[16px] xl:leading-5
          "
          >
            <div>
              <p>текст текст текст</p>
              <p>текст текст текст текст текст текст текст текст текст</p>
            </div>
            <div>
              <p>текст текст текст</p>
              <p>текст текст текст</p>
            </div>
            <div>
              <p>
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст
              </p>
            </div>
            <div>
              <p>текст текст текст текст текст текст</p>
              <p>текст текст текст текст текст текст</p>
            </div>
            <div>
              <p>текст текст текст </p>
              <p>текст текст текст текст текст текст </p>
              <p>текст текст текст текст текст текст </p>
              <p>текст текст текст текст текст текст текст текст текст </p>
            </div>
            <div>
              <p className="font-HavalMittel-medium text-[16px] leading-5">
                текст текст текст
              </p>
              <p>текст текст текст </p>
            </div>
            <div>
              <p className="font-HavalMittel-medium text-[16px] leading-5">
                текст текст текст
              </p>
              <p>текст текст текст </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
