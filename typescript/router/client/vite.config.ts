import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 6090,
        proxy: {
            '/api': {
                target: 'http://localhost:9060/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
});