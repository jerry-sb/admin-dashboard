import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {},
  test: {
    name: "connectly-oms",
    globals: true,
    dir: "tests",
    reporters: "basic",
    coverage: {
      include: ["app/**/*", "components/**/*", "lib/**/*"],
      reporter: ["text", "json", "text-summary"],
      reportsDirectory: "./coverage/"
    }
  }
});
