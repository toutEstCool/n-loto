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
  { title: 'Компания', link: '/about' },
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
