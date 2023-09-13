import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  console.log('command:', command);
  console.log('mode:', mode);

  return {
    base: (mode === 'page') ? '/vite-ts-web/' : '/',
    server: {
      host: 'localhost',
      port: 8080,
    },
  }
})