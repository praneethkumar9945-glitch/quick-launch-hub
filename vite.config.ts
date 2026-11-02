// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_BUILD=1 produces plain HTML files for shared hosting (GoDaddy/cPanel).
const isStatic = process.env.STATIC_BUILD === "1";

export default defineConfig({
  ...(isStatic ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The site uses hash-based routing (#/aics) for static hosting. The hash is
    // never sent to the server, so SSR always renders "/" while the client may
    // render another route — a guaranteed hydration mismatch. Render
    // client-only (SPA mode) everywhere so server and client always agree.
    spa: { enabled: true },
  },
});
