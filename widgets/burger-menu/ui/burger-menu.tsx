import { useMenuVisibility } from '@/features/burger-menu';
import { Burger } from '@/shared/components/burger';
import { Sheet } from '@/shared/components/sheet';

const menuItems = [
  {
    title: 'Купить лотереи',
    link: '#',
    children: [{ title: 'Моментальные лотереи', link: '/momentary-lotteries' }],
  },
  { title: 'Проверить билет', link: '/check-win' },
  { title: 'Акции', link: '/special' },
  { title: 'Победители', link: '/winnings' },
  { title: 'Подарить билет', link: '#' },
  { title: 'Франчайзинг', link: '#' },
  { title: 'Второй шанс: с миллионами на авто', link: '#' },
  { title: 'Второй шанс круглый год', link: '#' },
  { title: 'Второй шанс: Рождественская сказка', link: '#' },
  { title: 'Компания', link: '/about' },
  {
    title: 'Информация',
    link: '#',
    children: [
      { title: 'Скачать мобильное приложение', link: '#' },
      { title: 'Карта продаж', link: '#' },
      { title: 'Как получить выигрыш', link: '#' },
      { title: 'Архив тиражей', link: '#' },
    ],
  },
];

export const BurgerMenu = () => {
  const { isOpen, toggleVisibility, closeMenu } = useMenuVisibility();

  return (
    <>
      <Burger isOpen={isOpen} onToggle={toggleVisibility} />
      <Sheet isOpen={isOpen} onClose={closeMenu} items={menuItems} />
    </>
  );
};
