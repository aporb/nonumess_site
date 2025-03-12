import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // If you're deploying to a subdirectory, uncomment and modify the line below
  // base: '/subdirectory',
  
  // For production builds
  build: {
    // Makes URLs relative, which is ideal for shared hosting
    format: 'directory'
  }
});
