import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";
import { watermarkPlugin } from "./plugins/watermark-plugin.ts";

export default defineConfig({
    plugins: [
        removeConsole(),
        watermarkPlugin({
            text: "EST soft",
            color: "#000",
        }),
    ],
});
