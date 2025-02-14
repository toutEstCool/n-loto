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
    title: 'Кто является организатором лотереи?',
    children: [
      {
        title:
          'В соответствии с распоряжением Правительства Российской Федерации от 29 августа 2019 г. N 1921-р организатором всероссийских государственных лотерей в поддержку развития бокса является Министерство финансов Российской Федерации, а оператором — ООО «Спортивные Лотереи».',
      },
    ],
  },
  {
    title: 'Как и чем законодательно регулируется ваша деятельность?',
    children: [
      {
        title:
          'Деятельность ООО «Спортивные Лотереи» осуществляется в соответствии с действующим законодательством Российской Федерации и регулируется Федеральным законом от 11 ноября 2003 г. № 138-ФЗ «О лотереях».',
      },
    ],
  },
  {
    title: 'Какие бывают лотереи?',
    children: [
      {
        title:
          'Лотереи в зависимости от способа их проведения бывают тиражные и моментальные (бестиражные).',
      },
      {
        title:
          'Тиражной называется лотерея, в которой розыгрыш призового фонда между всеми участниками проводится единовременно после распространения лотерейных билетов.',
      },
      {
        title:
          'Моментальная (бестиражная) лотерея - лотерея, в которой информация, позволяющая определить выигрыши, закладывается в лотерейные билеты на стадии их изготовления.',
      },
    ],
  },
  {
    title: 'Где и как получить выигрыш?',
    children: [
      {
        title:
          'Выигрыш можно получить различными способами в точках продаж, личном кабинете на сайте или мобильном приложении. Детали о порядке и условиях получения выигрыша здесь:',
      },
    ],
  },
];

export const Faq = () => {
  return (
    <div className="bg-[#112D73] text-white pt-6 pb-8 mt-16">
      <Container>
        <div className="flex justify-between mb-6">
          <h2 className="text-[42px] font-bold">Вопросы и ответы</h2>
          <Button
            variant="outline"
            size="lg"
            className="rounded-[12px] border-2 text-[20px] font-normal"
          >
            посмотреть всё <ChevronRight />
          </Button>
        </div>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              hasChildren={item.children && item.children.length > 0}
            >
              <AccordionTrigger
                className="text-[24px] font-medium p-6 border-2 border-white rounded-[100px]"
                hasChildren={item.children && item.children.length > 0}
                chevronColor="#fff"
              >
                {item.title}
              </AccordionTrigger>
              {item.children && item.children.length > 0 && (
                <AccordionContent>
                  <ul className="flex flex-col gap-4 max-w-[790px] w-full">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-[15px] font-normal">
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
