import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-[1440px] px-[16px]', // Для экранов ≥ 1280px (по умолчанию)
        'max-[1279px]:max-w-[768px] max-[1279px]:px-[16px]', // Для экранов < 1280px
        'max-[767px]:max-w-[425px] max-[767px]:px-[16px]', // Для экранов < 768px
        className
      )}
    >
      {children}
    </div>
  )
};