import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

function excludeUnusedProductionModels() {
  let outputDirectory;

  return {
    name: 'exclude-unused-production-models',
    apply: 'build',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      await Promise.all([
        'models/planets/moon_small.glb',
        'models/spacecraft/apollo-lunar-module.glb',
      ].map((asset) => rm(resolve(outputDirectory, asset), { force: true })));
    },
  };
}

export default defineConfig({
  plugins: [react(), excludeUnusedProductionModels()],
});
