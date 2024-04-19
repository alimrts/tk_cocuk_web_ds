const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://tuikcocukapi.tuik.gov.tr/api/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
