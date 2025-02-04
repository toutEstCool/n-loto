import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export const HeaderDropdown = () => {
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
          className="absolute top-full left-0 w-[342px] h-[112px] bg-[#fff] shadow-lg rounded-md p-4 flex flex-col gap-2 transition-all duration-300 mt-6"
        >
          <p className="text-gray-800 font-medium">1. Привет</p>
          <p className="text-gray-800 font-medium">2. Пока</p>
        </div>
      )}
    </div>
  )
}