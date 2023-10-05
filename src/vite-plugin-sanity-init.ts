import { ClientConfig } from "@sanity/client";

export function vitePluginSanityInit(config: ClientConfig) {
  const virtualModuleId = "virtual:sanity-init";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "vite-plugin-sanity-init",
    async resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `
          import {createClient} from "@sanity/client";
          export const sanityClient = createClient(${JSON.stringify(config)});
        `;
      }
    },
  };
}
