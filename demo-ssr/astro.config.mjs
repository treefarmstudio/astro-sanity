import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import image from "@astrojs/image";
import sanity from 'astro-sanity'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [image(), sanity({
    projectId: '8hj1t7km',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })],
});