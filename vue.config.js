module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/index.scss";`, //檔案位置
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/notes-record/" : "/",
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
};
