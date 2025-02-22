import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ModalRegister = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center cursor-default">
      <button onClick={() => setIsOpen(true)} className="">
        Вход / Регистрация
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#142757] bg-opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Модальное окно */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#364059] text-start  bg-white rounded-2xl shadow-xl w-[464px] p-4 pt-10 mx-2 md:p-16 md:pt-14 relative">
                <h2
                  className="font-HavalMittel-medium mb-2
                  text-[28px] leading-8
                "
                >
                  Вход / Регистрация
                </h2>
                <p
                  className="font-HavalMittel-regular mb-8
                  text-[18px] leading-6
                "
                >
                  На ваш номер будет отправлен смс-код
                </p>

                <label>
                  <span className="text-[14px] leading-4 mb-1 font-HavalMittel-regular">
                    Телефон
                  </span>
                  <input
                    type="tel"
                    placeholder="+7"
                    className="w-full p-3 border mb-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <button className="w-full py-3 px-5 bg-[#2f41b0] text-white rounded-[8px] hover:bg-opacity-90 transition">
                  Далее
                </button>

                <button
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
