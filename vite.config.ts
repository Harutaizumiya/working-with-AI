import { defineConfig } from "vite-plus";
import { CodeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [
    CodeInspectorPlugin({
      bundler: 'vite',
    }),
    ],
});
