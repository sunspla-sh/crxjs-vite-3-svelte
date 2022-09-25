import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import manifest from './mainfest.json';
import { crx } from '@crxjs/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    crx({ manifest })
  ]
})
