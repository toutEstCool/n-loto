import { useMenuVisibility } from "@/features/burger-menu";
import { Burger } from "@/shared/components/burger"
import { Sheet } from "@/shared/components/sheet"

export const BurgerMenu = () => {
  const { isOpen, toggleVisibility, closeMenu } = useMenuVisibility();

  return (
    <>
      <Burger isOpen={isOpen} onToggle={toggleVisibility} />
      <Sheet isOpen={isOpen} onClose={closeMenu} items={[{ title: 'Купить лотереи', children: [{ title: 'Моментальные лотереи' }] }, { title: 'Проверить билет' }, { title: 'Акции' }, { title: 'Победители' }, { title: 'Подарить билет' }, { title: 'Франчайзинг' }, { title: 'Второй шанс: с миллионами на авто' }, { title: 'Второй шанс круглый год' }, { title: 'Второй шанс: Рождественская сказка' }, { title: 'Компания' }, { title: 'Информация', children: [{ title: 'Скачать мобильное приложение' }, { title: 'Карта продаж' }, { title: 'Как получить выигрыш' }, { title: 'Архив тиражей' }] }]} />
    </>
  )
}