import { defineConfig } from "vite-plus";
import { CodeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig(({ command }) => ({
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins:
    command === "serve"
      ? [
          CodeInspectorPlugin({
            bundler: 'vite',
          }),
        ]
      : [],
}));
