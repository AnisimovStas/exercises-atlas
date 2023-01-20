const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/exercises-atlas",
});

module.exports = {
  pluginOptions: {
    ghPages: {
      message: "Updates",
    },
  },
};
