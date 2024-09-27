const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/components.js",
  plugins: [terser()],
  output: {
    format: "iife",
    file: "dist/components.js",
    sourcemap: true,
  },
};
