import { useState } from "react";

export const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Кнопка для открытия/закрытия Sheet */}
      <button
        onClick={toggleSheet}
        className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? "Закрыть меню" : "Открыть меню"}
      </button>

      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleSheet}
      ></div>

      {/* Сам Sheet */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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