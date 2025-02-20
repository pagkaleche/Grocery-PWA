import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/WebDevTrends/' : '/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            }
        }
    },
    plugins: [
        copy({
            targets: [
                { src: 'icons', dest: 'dist/assets' },
                { src: 'service-worker.js', dest: 'dist' }
            ],
            hook: 'writeBundle'
        })
    ]
});
