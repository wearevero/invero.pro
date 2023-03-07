import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://invero-pro.now.sh',
  output: "server",
  adapter: vercel(),
  integrations: [sitemap(({ customPages: ['https://invero-pro.now.sh'] })), prefetch()],
});
