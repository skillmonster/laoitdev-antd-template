import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { default as viteReact } from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode
}) => {
  // Load the appropriate .env file based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'routes': path.resolve(__dirname, 'src/routes'),
        'ui': path.resolve(__dirname, 'src/ui'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'hooks': path.resolve(__dirname, 'src/ui/hooks'),
        'models': path.resolve(__dirname, 'src/models'),
        'components': path.resolve(__dirname, 'src/ui/components'),
        'containers': path.resolve(__dirname, 'src/ui/containers'),
        'styles': path.resolve(__dirname, 'src/ui/styles'),
        'theme': path.resolve(__dirname, 'src/ui/styles/theme'),
        'services': path.resolve(__dirname, 'src/services'),
        'utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    define: {
      'process.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL || '/'),
    },
    plugins: [
      TanStackRouterVite({
        autoCodeSplitting: true,
      }),
      viteReact(),
    ],
    tools: {
      rspack: {
        plugins: [TanStackRouterRspack({
          autoCodeSplitting: true,
        })],
      },
    },
    build: {
      chunkSizeWarningLimit: 10000, // Set to a value that suits your needs
    },
    esbuild: {
      drop: ['debugger'],
    },

  };
});