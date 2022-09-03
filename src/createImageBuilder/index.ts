import imageBuilder from '@sanity/image-url';

import { SanityClientLike } from '@sanity/image-url/lib/types/types';

export function createImageBuilder(client: SanityClientLike){
  return imageBuilder(client);
}