import { useState } from "react"

interface ISheetProps {
  isOpen: boolean; // Определяет, открыто меню или нет
  onClose: () => void; // Коллбэк для закрытия меню
  items: string[]; // Массив элементов для отображения в меню
}

export const Sheet: React.FC<ISheetProps> = (props) => {
  const { isOpen, onClose, items } = props

  const op = true

  console.log(isOpen)


  return (
    <div>
      {/* Затемнение фона */}
      <div
        className={`fixed top-[85px] inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      // onClick={toggleSheet}
      ></div>

      {/* Сам Sheet */}
      <div
        className={`fixed top-10 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } w-[84%] sm:w-[31%]`}
      >
        {/* Список элементов внутри Sheet */}
        <ul className="p-4">
          {["Главная", "О нас", "Услуги", "Контакты"].map((item, index) => (
            <li key={index} className="py-2 hover:bg-gray-100 rounded-lg px-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};