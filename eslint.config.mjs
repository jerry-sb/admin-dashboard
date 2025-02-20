import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseUrl: __dirname,
});

const eslintConfig = [
   ...compat.config({
      extends: ["next/core-web-vitals", "next/typescript", "prettier"],
      plugins: ["@typescript-eslint", "import", "vitest"],
      rules: {
         semi: ["error", "always"],
         eqeqeq: ["error", "always"],
         quotes: ["error", "double"],
         curly: ["warn", "multi-line", "consistent"],
         "sort-imports": [
            "error",
            {
               ignoreDeclarationSort: true,
            },
         ],
         "prefer-arrow-callback": "error",
         "prefer-template": "error",
         "import/no-unresolved": ["error", { commonjs: true, amd: true }],
         "import/named": "off",
         "import/namespace": "off",
         "import/no-named-as-default-member": "off",
         "import/no-duplicates": "error",
         "import/extensions": [
            "error",
            "always",
            {
               ts: "never",
               tsx: "never",
               mjs: "never",
               js: "never",
            },
         ],
         "import/order": [
            "error",
            {
               alphabetize: { order: "asc", caseInsensitive: true },
               groups: [
                  "builtin",
                  "external",
                  "internal",
                  "parent",
                  "sibling",
                  "index",
                  "object",
               ],
               "newlines-between": "never",
               pathGroups: [
                  {
                     pattern: "@/**",
                     group: "builtin",
                     position: "before",
                  },
               ],
               pathGroupsExcludedImportTypes: ["builtin"],
            },
         ],
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
         ],
         "@typescript-eslint/explicit-function-return-type": "off",
         "vitest/expect-expect": "off",
         "vitest/consistent-test-it": [
            "error",
            { fn: "it", withinDescribe: "it" },
         ],
      },
      ignorePatterns: [".next/", "tailwind.config.ts", "node_modules/"],
      overrides: [
         {
            files: ["tests/**/*"],
            rules: {
               "import/extensions": ["error", "never"],
               "@typescript-eslint/no-unused-vars": "off",
            },
         },
      ],
   }),
];

export default eslintConfig;
