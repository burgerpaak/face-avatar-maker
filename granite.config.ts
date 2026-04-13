import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'pixie-lab',
  brand: {
    displayName: '픽셀 캐릭터 만들기',
    primaryColor: '#333333',
    icon: 'https://burgerpaak.github.io/pixie-lab/og-image.png',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'npx serve . -l 5173',
      build: 'npm run build',
    },
  },
  webViewProps: {
    type: 'partner',
    bounces: false,
    pullToRefreshEnabled: false,
    allowsBackForwardNavigationGestures: false,
  },
  permissions: [],
});
