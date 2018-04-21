module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }),
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer")({})
  ]
};
