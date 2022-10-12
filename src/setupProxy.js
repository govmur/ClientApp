const { createProxyMiddleware } = require('http-proxy-middleware');
//const { env } = require('process');

// const target = "https://weather-forecast-api-nsoqvnpk5a-el.a.run.app";

// const context =  [
//   "/weatherforecast",
// ];

// module.exports = function(app) {
//   const appProxy = createProxyMiddleware(context, {
//     target: target,
//     secure: false,
//     changeOrigin: true,
//     headers: {
//       Connection: 'Keep-Alive'
//     }
//   });

//   app.use('/api',appProxy);
// };

const proxy = {
  target: 'https://weather-forecast-api-nsoqvnpk5a-el.a.run.app',
  changeOrigin: true
}
module.exports = function(app) {
app.use( 
  createProxyMiddleware(proxy)
);
};
