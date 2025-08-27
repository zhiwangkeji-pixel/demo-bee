# 部署说明（Netlify）

本目录已添加：
- `netlify.toml`（build 命令：`npm ci && npm run build`；发布目录：`dist`；Node 版本：20）
- `_redirects`（单页应用 200 回退）

本地打包：
```bash
npm install
npm run build
# 产物在 dist/
```

Netlify 设置（如果不使用 netlify.toml）
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Environment variable: `NODE_VERSION=20`

如果你的项目在子目录（例如 apps/web），请将 Netlify 的 Base directory 设置为该子目录。
