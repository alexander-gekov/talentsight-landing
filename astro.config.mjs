import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  site: "https://talentsight.netlify.app",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        icon: "storyblok/Icon",
        hero: "storyblok/Hero",
        features: "storyblok/Features",
        logos: "storyblok/Logos",
        cta: "storyblok/Cta",
        section_head: "storyblok/SectionHead",
        heading: "storyblok/Heading",
        gallery: "storyblok/Gallery",
        member: "storyblok/Member",
        howto: "storyblok/Howto",
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
