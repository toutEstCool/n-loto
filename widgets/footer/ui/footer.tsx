import { cn } from '@/shared/lib/utils';
import { Container } from '@/widgets/container';
import { Lowerfooter } from './lower-footer';
import { UpperFooter } from './upper-footer';

interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className={cn('bg-[#F2F4FF] min-h-screen py-8', className)}>
      {/* <div className="sticky h-10 z-[1] top-0 left-0">lol this is logo</div> */}
      <Container>
        <UpperFooter />
        <Lowerfooter />
      </Container>
    </footer>
  );
};
