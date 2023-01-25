import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

const name = "astro-sanity";

export default defineConfig(() => {
  return {
    plugins: [dts()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "astro-sanity",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    }}
  });
