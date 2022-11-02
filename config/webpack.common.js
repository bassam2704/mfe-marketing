const HTMLWebpackPlugin=require('html-webpack-plugin')
module.exports={
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'], // take all these kind of 2015, 16, 17 and so on syntax and convert it down to S5 and then finally
                        plugins:['@babel/plugin-transform-runtime'] //plug in transform runtime is going to add in a little bit of additional code just to enable some different

                       // features for our project inside the browser, such as async O8 syntax and some other related things.
                    }
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}