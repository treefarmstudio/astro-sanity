import sanityClient, { ClientConfig } from "@sanity/client";
import { AstroIntegration } from "astro";

export { createImageBuilder } from "./createImageBuilder/index.js";
export { portableTextToHtml } from "./portableTextToHtml/index.js";
export { groq } from "./groq/index.js";

function initSanityClient(config: ClientConfig) {
  const client = sanityClient(config);

  globalThis.sanityClient = client;
}

export function useSanityClient() {
  if (!globalThis.sanityClient) {
    console.error("Sanity client has not been initialized correctly");
  }

  return globalThis.sanityClient;
}

export default function astroSanityIntegration(
  options: ClientConfig,
): AstroIntegration {
  return {
    name: "astro-sanity",
    hooks: {
      "astro:config:setup": ({ injectScript, updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [],
          },
        });

        initSanityClient(options);
      },
    },
  };
}
