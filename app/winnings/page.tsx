import React from 'react';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/widgets/container';
import { WinningsHistorySlider } from '@/widgets/winnings-hitsory-slider';
import { WinningsRecetSection } from '@/widgets/winnings-recent-section';
import Image from 'next/image';
import { getPosts, urlFor } from '@/sanity/lib/sanity';

const Winnings = async () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Победители', href: '/special' },
  ];

  const posts = await getPosts();
  console.log(posts);

  return (
    <Container className="mt-[40px] sm:mt-[86px] min-h-screen">
      <div>
        <div className="pt-3 mt-6">
          <Breadcrumbs variant="black" items={breadcrumbItems} />
        </div>
        <WinningsHistorySlider />
        <WinningsRecetSection />
      </div>

      <div>
        <h1>Список постов</h1>
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {posts.map((post: any) => (
            <li key={post.slug.current}>
              <h2>{post.title}</h2>
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(500).url()}
                  alt={post.title}
                  width={500}
                  height={300}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Winnings;
