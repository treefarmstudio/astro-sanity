# Astro + Sanity Integration

This is a helper package for integrating [Sanity](https://www.sanity.io/) with [Astro](https://astro.build/). It is not officially from Sanity but it is architected in the same way their official packages for frameworks like NextJS are.

## Installation

```bash
npx astro add astro-sanity
```

Follow the prompts and once it's finished you should have something like the following in your `astro.config.mjs` file:

```js
import sanity from 'astro-sanity'

...

export default defineConfig({
  integrations: [sanity()],
});
```

Update the sanity config to match your Sanity Client Config like so:

```js
export default defineConfig({
  integrations: [
    sanity({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })],
});
```

## Usage

Please see the [`/demo`](https://github.com/littlesticks/astro-sanity/tree/main/demo) for a full example. However, this package was designed to give you the building blocks to integrate with Sanity but the flexibility to implement it how you want with the helper function names and behavior you want.

### Using the Client

You can globally use the Sanity Client from the config with the following import

```js
import { useSanityClient } from 'astro-sanity';
```

### Querying Sanity with your Client

Here is an example using the client to query Sanity:

```js
import { useSanityClient, groq } from 'astro-sanity';

export async function getFirstBlogPost() {
  const query = groq`*[_type == "post"]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}
```

### Create Your own Image Builder Helper

You can learn more about Sanity's image builder [here](https://www.sanity.io/docs/image-url). Here is an example of how you can create your own helper function to use in your components:

```js
import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}
```

### Create a Custom portableTextToHtml Serializer

You can learn more about the @portabletext/to-html package [here](https://github.com/portabletext/to-html)

```js
import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  /* your custom components here */
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
```

### Create a PortableText Astro Component

```astro
---
import { sanityPortableText } from '../sanity/portableText'

const {portableText} = Astro.props;
---

<Fragment set:html={sanityPortableText(portableText)} />
```

This can then be used in your Astro files and convert portable text to HTML automatically.

```astro
<PortableText portableText={myPortableText}/>
```

## Support

Please feel free to reach out to us on our Discord if you have questions or file an issue on the repo.

[Join Little Sticks Discord](https://littlesticks.dev/discord)
