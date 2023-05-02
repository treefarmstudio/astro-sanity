import { ClientConfig, SanityClient } from "@sanity/client";
import { AstroIntegration } from "astro";

export { createImageBuilder } from "./createImageBuilder/index.js";
export { portableTextToHtml } from "./portableTextToHtml/index.js";
export { createSanityClient } from "./createSanityClient/index.js";
export { groq } from "./groq/index.js";

import { vitePluginSanityInit } from "./vite-plugin-sanity-init.js";

export function useSanityClient() {
  if (!globalThis.sanityClient) {
    console.error("Sanity client has not been initialized correctly");
  }

  return globalThis.sanityClient as SanityClient;
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
            plugins: [
              vitePluginSanityInit(options),
            ],
          },
        });
        injectScript(
          "page-ssr",
          `
          import { sanityClient } from "virtual:sanity-init";
          globalThis.sanityClient = sanityClient;
          `,
        );
      },
    },
  };
}
