import { client } from './client';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}
