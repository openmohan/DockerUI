var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
devServer: {
   port: 8090,
   // Send API requests on localhost to API server get around CORS.
   // proxy: {
   //    '/api': {
   //       target: {
   //          host: "10.203.63.242",
   //          protocol: 'http:',
   //          port: 2375
   //       },
   //       pathRewrite: {
   //          '^/api': ''
   //       }
   //    }
   // }
},
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;