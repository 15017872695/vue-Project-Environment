const CompressionWebpackPlugin = require('compression-webpack-plugin')

const compress = new CompressionWebpackPlugin(
 {
   filename: info => {
     return `${info.path}.gz${info.query}`
   },
   algorithm: 'gzip', 
   threshold: 10240,
   test: new RegExp(
     '\\.(' +
     ['js'].join('|') +
     ')$'
   ),
   minRatio: 0.8,
   deleteOriginalAssets: false
 }
)
module.exports = {
devServer: {

   before(app, server) { 
     app.get(/.*.(js)$/, (req, res, next) => { 
       req.url = req.url + '.gz';
       res.set('Content-Encoding', 'gzip');
       next();
     })
   }
 },
 configureWebpack: {
     plugins: [compress]
 }
}