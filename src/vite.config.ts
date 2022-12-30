import { defineConfig } from "vite";
import path from "path";

const name = "astro-sanity";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "astro-sanity",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    }}
  });