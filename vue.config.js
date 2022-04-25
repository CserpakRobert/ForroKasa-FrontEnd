module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 5000,
    proxy: "http://localhost/",
  },
};
