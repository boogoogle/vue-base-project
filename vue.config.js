const path = require("path");

// function addStyleResource(rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({
//       patterns: [path.resolve(__dirname, "./src/styles/index.scss")]
//     });
// }
module.exports = {
  // publicUrl: "",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
    // devServer: {
    //   proxy: {
    //     "/api/v1/": {
    //       target: "http://lhd.unie.shop"
    //     }
    //   },
    //   port: "8809"
    // }
  }
  // chainWebpack: config => {
  //   const types = ["vue", "normal-modules", "normal"]; // "vue-modules",
  //   types.forEach(type =>
  //     addStyleResource(config.module.rule("scss").oneOf(type))
  //   );
  // }
};
