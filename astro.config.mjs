import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://invero-pro.now.sh",
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
  integrations: [
    sitemap({
      customPages: ["https://invero-pro.now.sh"],
    }),
    prefetch(),
    svelte(),
    tailwind(),
  ],
});
