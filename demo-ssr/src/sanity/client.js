import { createSanityClient } from "astro-sanity";

export const sanityClient = createSanityClient({
  projectId: '8hj1t7km',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
})