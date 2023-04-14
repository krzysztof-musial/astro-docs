import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";

const options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  // markdown: {
  //   shikiConfig: {
  //     theme: "github-dark",
  //   },
  // },
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
