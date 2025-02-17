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
