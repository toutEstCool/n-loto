'use client';

import { cn } from '@/shared/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItemProps {
  title: string;
  content?: string[];
  children?: FaqItemProps[];
}

export const FaqItem = ({ title, content, children }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="bg-[#f0ead8] mx-3 relative p-3 md:p-6 flex justify-between items-center rounded-[12px]"
        onClick={toggleOpen}
      >
        <div
          className="
              w-2 h-[100%] rounded-[12px_0_0_12px] absolute top-0 left-0 z-10 bg-custom-gradient
            "
        />
        <h2
          className="font-[500] font-Acrom pl-3 text-[#364059]
                text-[18px] leading-6 max-w-[245px]
                md:text-[24px] md:leading-8 md:max-w-[1000px]
                xl:text-[28px] 
              "
        >
          {title}
        </h2>
        <div>
          <div
            className={`w-[44px] h-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer`}
          >
            <ChevronDown
              stroke="#000"
              className={cn(
                'rotate-0 transition-all duration-300',
                {
                  'rotate-180': isOpen,
                },
                [],
              )}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="pl-6 flex flex-col gap-4">
          {Array.isArray(content) && content.length > 0 && (
            <div className="flex flex-col gap-0">
              {Array.isArray(content) &&
              content.length > 0 &&
              Array.isArray(content) ? (
                content.map((item, index) => (
                  <p
                    className="text-[#364059] text-[14px] leading-5 md:text-[16px] md:leading-6 font-HavalMittel-medium max-w-[734px] pl-4 md:pl-8"
                    key={index}
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-[#364059] text-[16px] leading-6 font-HavalMittel-medium max-w-[734px]">
                  {content}
                </p>
              )}
            </div>
          )}
          {children &&
            children.map((child, index) => <FaqItem key={index} {...child} />)}
        </div>
      )}
    </>
  );
};
