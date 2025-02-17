import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"]{title, slug, mainImage}`);
}

export async function getSpecials() {
  return client.fetch(
    `*[_type == "specials"]{
      actionName,
      description,
      startDate,
      endDate,
      "lotteries": lotteries[]-> { lotteryName },
      "imageUrl": image.asset->url
    }`,
  );
}
