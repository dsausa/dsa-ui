import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

const purge = purgecss({
  content: ["./src/**/*.tsx","./src/**/*.css", "./src/index.html"],
  defaultExtractor: (content: string) => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  namespace: 'dsa-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        // Strip out unused CSS classes
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purge, cssnano()]
          : [])
      ]
    })
  ]
};

