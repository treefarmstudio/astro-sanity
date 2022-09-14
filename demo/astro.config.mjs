import { defineConfig } from 'astro/config';

import image from "@astrojs/image";
import sanity from 'astro-sanity'
// https://astro.build/config
export default defineConfig({
  integrations: [image(), sanity],
  
});