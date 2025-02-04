'use client'

import { cn } from "@/shared/lib/utils"
import { Phone } from 'lucide-react';
import { Container } from "../container/container";
import Image from "next/image";
import { HeaderDropdown } from "@/shared/components/header-dropdown/header-dropdown";
import { useEffect, useRef, useState } from "react";

interface IHeaderProps {
  className?: string
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { className } = props

  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие меню при клике за его пределами
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Закрытие меню при нажатии Esc
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  // Тоггл видимости меню
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };



  return (
    <header className={cn('', className)}>
      {/* Upper Header */}
      <div className="bg-[#8B3A9A] py-1 px-4  text-[13.5px] font-bold">
        <Container>
          <div className="flex justify-between">
            <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8">
              <li className="hover:text-white">Франчайзинг</li>
              <li className="hover:text-white">О компании</li>
            </ul>
            <div>
              <a href="tel:" className="flex items-center gap-2">
                <Phone color="white" size={14} />
                <p className="text-white font-medium">Круглосуточная поддержка по телефону</p>
                <p className="text-white font-medium">8 800 333-7-333</p>
              </a>
            </div>
            <ul className="flex items-center text-[#dddddd] cursor-pointer gap-8">
              <li className="hover:text-white">Проверить билет</li>
              <li className="hover:text-white">
                Как получить выигрыш</li>
            </ul>
          </div>
        </Container>
      </div>
      {/* Lower Header */}
      <div className="bg-[#FFFFFF] py-1">
        <Container className="h-[54]">
          <div className="flex items-center justify-between h-[100%]">
            {/* Left Section */}
            <div className="flex items-center">
              <div className="mr-16">
                <Image src={'/logo.png'} alt="Logo" width={150} height={39} />
              </div>
              <ul className="flex items-center gap-8 text-[#2F41B0] text-[16px] font-medium">
                <li>
                  <div className="w-full relative">
                    {/* Кнопка */}
                    <button
                      className="border-t-[1px] border-b-[1px] border-[#8b3a9a] text-[#8b3a9a] font-black"
                      onClick={toggleVisibility}
                    >
                      Второй шанс
                    </button>

                    {/* Блок, который появляется под кнопкой */}
                    {isVisible && (
                      <div
                        className="absolute top-full left-0 w-[340px]  bg-[#fff] shadow-lg rounded-md flex flex-col gap-2 transition-all duration-300 mt-6 p-3"
                      >
                        <div className="flex gap-2">
                          <Image src={'https://online-static.website.cloud.croc.ru/online-meta/920d201e-b53b-498b-9904-358613d03b9f.png'} height={24} width={24} alt="Loto" />
                          <span>Второй шанс круглый год</span>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer">Акции</li>
                <li className="hover:text-[#8b3a9a] transition-all duration-300 cursor-pointer">Победители</li>
              </ul>
            </div>
            {/* Right Section */}
            <div>
              <ul className="text-[#2F41B0] text-[16px] font-medium">
                <li>
                  <button>
                    <span>
                      <span>Вход / Регистрация</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}