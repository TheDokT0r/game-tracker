import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  bundle: false,
  minify: false,
  clean: true,
});
