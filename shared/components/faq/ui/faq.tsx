import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { Button } from '@/shared/ui/button';
import { Container } from '@/widgets/container';
import { ChevronRight } from 'lucide-react';
import React from 'react';
const items = [
  {
    title: 'текст, текст,',
    children: [
      {
        title:
          'текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,',
      },
    ],
  },
  {
    title: 'текст, текст,',
    children: [
      {
        title:
          'текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,',
      },
    ],
  },
  {
    title: 'текст, текст,',
    children: [
      {
        title: 'текст, текст, текст, текст, текст, текст,',
      },
      {
        title:
          'текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,',
      },
      {
        title:
          'текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,',
      },
    ],
  },
  {
    title: 'текст, текст,',
    children: [
      {
        title:
          'текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст, текст,',
      },
    ],
  },
];

export const Faq = () => {
  return (
    <div className="bg-[#112D73] text-white pt-6 pb-8 mt-16">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2
            className="font-bold font-Acrom w-[228px] md:w-full
            text-[28px] leading-[32px]
            md:text-[36px] md:leading-[42px]
            xl:text-[42px] xl:leading-[52px]
          "
          >
            Текст, Текст,
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="hidden rounded-[12px] border-2 font-normal md:flex items-center
              text-[18px] leading-[24px]
              xl:text-[20px]
            "
          >
            Текст, Текст, <ChevronRight />
          </Button>
          <button
            className="md:hidden rounded-[12px] border-2 font-normal flex items-center
              text-[18px] leading-[24px] px-2 py-1
            "
          >
            Текст, <ChevronRight />
          </button>
        </div>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              hasChildren={item.children && item.children.length > 0}
            >
              <AccordionTrigger
                className="text-[14px] md:text-[24px] py-4 px-6 font-bold font-Acrom md:p-6 border-2 border-white rounded-[100px]"
                hasChildren={item.children && item.children.length > 0}
                chevronColor="#fff"
              >
                {item.title}
              </AccordionTrigger>
              {item.children && item.children.length > 0 && (
                <AccordionContent>
                  <ul className="flex flex-col gap-4 max-w-[790px] w-full">
                    {item.children.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="font-HavalMittel-regular pb-4
                        text-[14px] leading-4 ml-2
                        md:ml-4
                        xl:ml-6 xl:leading-5
                        "
                      >
                        {subItem.title}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};
