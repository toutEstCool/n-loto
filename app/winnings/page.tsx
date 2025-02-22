import React from 'react';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import { WinningsHistorySlider } from '@/widgets/winnings-hitsory-slider';
import { WinningsRecetSection } from '@/widgets/winnings-recent-section';

const Winnings = async () => {
  const breadcrumbItems = [
    { label: 'текст', href: '/' },
    { label: 'текст текст', href: '/special' },
  ];

  return (
    <Container className="mt-[40px] sm:mt-[58px] md:mt-[86px] min-h-screen">
      <div>
        <div className="pt-3 mt-6">
          <Breadcrumbs variant="black" items={breadcrumbItems} />
        </div>
        <WinningsHistorySlider />
        <WinningsRecetSection />
      </div>
    </Container>
  );
};

export default Winnings;
