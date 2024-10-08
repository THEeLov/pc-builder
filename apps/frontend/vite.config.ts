/// <reference types='vitest' />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

// Define __dirname in terms of ES Module scope
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    root: __dirname,
    cacheDir: "../../node_modules/.vite/apps/frontend",

    server: {
        port: 4200,
        host: "localhost",
    },

    preview: {
        port: 4300,
        host: "localhost",
    },

    plugins: [react(), nxViteTsPaths()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@/hooks": resolve(__dirname, "./src/hooks"),
            "@/data": resolve(__dirname, "./src/data"),
        },
    },

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
        outDir: "../../dist/apps/frontend",
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },

    test: {
        globals: true,
        cache: {
            dir: "../../node_modules/.vitest",
        },
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

        reporters: ["default"],
        coverage: {
            reportsDirectory: "../../coverage/apps/frontend",
            provider: "v8",
        },
    },
})
