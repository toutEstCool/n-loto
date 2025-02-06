import { useMenuVisibility } from "@/features/burger-menu";
import { Burger } from "@/shared/components/burger"
import { Sheet } from "@/shared/components/sheet"

export const BurgerMenu = () => {
  const { isOpen, toggleVisibility, closeMenu } = useMenuVisibility();

  return (
    <>
      <Burger isOpen={isOpen} onToggle={toggleVisibility} />
      <Sheet isOpen={isOpen} onClose={closeMenu} items={[]} />
    </>
  )
}