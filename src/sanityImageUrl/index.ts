import imageUrlBuilder from '@sanity/image-url';

import { SanityClientLike, SanityImageSource } from '@sanity/image-url/lib/types/types';

export function sanityImageUrl(client: SanityClientLike, source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}