'use client';

import { OkIcon, TelegramIcon, VkIcon } from '@/shared/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MenuItem {
  title: string;
  children?: MenuItem[];
  link: string;
}

interface ISheetProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const Sheet: React.FC<ISheetProps> = (props) => {
  const { isOpen, onClose, items } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      {/* Затемнение фона */}
      <div
        className={`z-[100] fixed inset-0 bg-[#1c2e5e] transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: isMobile ? 40 : 84, willChange: 'opacity' }}
        onClick={onClose}
      ></div>

      {/* Сам Sheet */}
      <div
        className={`z-[100] fixed left-0 p-6 h-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-[84%] sm:w-[31%] overflow-y-auto`}
        style={{
          top: isMobile ? 40 : 84,
          willChange: 'transform',
          maxHeight: `calc(100vh - ${isMobile ? 44 : 84}px)`,
        }}
      >
        {/* Список элементов меню */}
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              hasChildren={item.children && item.children.length > 0}
            >
              <AccordionTrigger
                className="text-[#2f41b0] text-[16px] font-medium"
                hasChildren={item.children && item.children.length > 0}
              >
                <Link href={item.link}>{item.title}</Link>
              </AccordionTrigger>
              {item.children && item.children.length > 0 && (
                <AccordionContent>
                  <ul className="flex flex-col gap-4">
                    {item.children.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-[#2f41b0] hover:text-[#364059] text-[15px] font-HavalMittel-regular"
                      >
                        <Link href={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <div>
          <div className="flex flex-col gap-4">
            <a href="tel:88003337333">
              <div className="flex flex-col text-[#032bba] font-bold text-[22px] font-HavalMittel-bold">
                <span>Горячая линия:</span>
                <span>8 800 333-7-333</span>
              </div>
            </a>
            <div className="flex flex-col gap-4 text-[16px] font-HavalMittel-regular">
              <div className="flex items-center gap-3">
                <TelegramIcon />
                <span>Служба поддержки</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail color="#364059" width={32} height={32} />
                <span>support@nloto.ru</span>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex-1" />
            <div className="flex-1 flex items-center gap-4 ml-10">
              <VkIcon />
              <OkIcon />
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
