const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  pluginOptions: {
    ghPages: {
      message: "Updates",
    },
  },
};
module.exports = {
  publicPath: "",
};
