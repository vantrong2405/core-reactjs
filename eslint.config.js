import { ESLint } from "eslint";

/** @type {ESLint.ConfigData} */
export default {
  files: ["**/*.{ts,tsx}"], // Áp dụng cho các file .ts, .tsx
  languageOptions: {
    parser: "@typescript-eslint/parser", // Sử dụng parser của TypeScript
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn"
  }
};
