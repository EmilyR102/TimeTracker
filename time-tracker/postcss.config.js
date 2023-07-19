module.exports = {
  plugins: [
    require("tailwindcss"), 
    require("autoprefixer"),
    require("postcss-preset-env"),
    require("postcss-mixins"),
    require("postcss-nesting"),
    require("postcss-simple-vars"),
    require("postcss-for"),
    require("postcss-conditionals"),
    require("postcss-each"),
    require("postcss-while")
  ],
};
