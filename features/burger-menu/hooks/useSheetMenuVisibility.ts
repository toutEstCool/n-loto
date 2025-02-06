import { useState, useCallback } from "react"

export const useMenuVisibility = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggleVisibility, closeMenu };
};
