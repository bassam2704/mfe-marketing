const {merge}=require('webpack-merge');

const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig =require('./webpack.common')
// const packageJson=require('../package.json')
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8081/'
    },
    devServer:{
        port:8081,
        historyApiFallback:{
            index:"index.html"
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing', //used as global variable when scripts loads inside the container 
            filename:'remoteEntry.js',
            exposes:{
                './MarkertingApp':'./src/bootstrap'
            },
            // shared:packageJson.dependencies

        }),

        // new HTMLWebpackPlugin({
        //     template:'./public/index.html'
        // })
    ]
};
module.exports=merge(commonConfig,devConfig)