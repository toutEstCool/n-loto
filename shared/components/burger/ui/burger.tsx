import React from 'react';

interface IBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

// eslint-disable-next-line react/display-name
export const Burger: React.FC<IBurgerProps> = React.memo((props) => {
  const { isOpen, onToggle } = props;

  return (
    <>
      <div className="relative flex items-center justify-center">
        {/* Бургер-иконка */}
        <button
          onClick={onToggle}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          {/* Верхняя палочка */}
          <span
            className={`block h-[4px] w-full bg-[#2f41b0] rounded-sm transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          ></span>

          {/* Средняя палочка */}
          <span
            className={`block h-[4px] w-full bg-[#2f41b0] rounded-sm transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>

          {/* Нижняя палочка */}
          <span
            className={`block h-[4px] w-full bg-[#2f41b0] rounded-sm transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          ></span>
        </button>
      </div>
    </>
  );
});
