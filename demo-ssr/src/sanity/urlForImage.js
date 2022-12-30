import { sanityClient } from './client.js';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(sanityClient);

export function urlForImage(source) {
  return imageBuilder.image(source);
}
