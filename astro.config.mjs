// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Space Mono",
        cssVariable: "--font-spacemono",
        weights: [400],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
