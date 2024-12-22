import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Jest testing plugin (optional)
import pluginImport from "eslint-plugin-import"; // For import/export linting (optional)

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Base configuration for JavaScript with browser globals
  {
    ignores: [
      'assets/**', // Ignore the entire 'assets' folder
      '**/*.png', // Ignore all .png files across the project
      '**/*.gif', // Ignore all .gif files
      '.DS_Store', // Ignore '.DS_Store' files
      'node_modules/**', // Explicitly ignore 'node_modules' too
      '*.png',
      '*.gif',
      '*.ico'
    ],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest", // Ensure latest JavaScript features
    }
  },

  // Recommended rules from @eslint/js
  pluginJs.configs.recommended,

  // Additional rules for test files (if using Jest or similar)
  {
    files: ["**/*.test.js", "**/*.test.jsx"], // Limit to test files
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: globals.jest, // Include Jest globals (e.g., `test`, `expect`)
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
    },
  },

  // Import/export linting rules (optional, useful for managing imports)
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: { import: pluginImport },
    rules: {
      "import/order": [
        "warn",
        { groups: [["builtin", "external", "internal"]] },
      ],
      "import/no-unresolved": "error", // Report unresolved imports
    },
  },
];