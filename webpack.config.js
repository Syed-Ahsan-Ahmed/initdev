var webpack=require("webpack");
var path=require("path");
module.exports={
    entry:'./src/index.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    devServer:{
        inline:true,    
        contentBase:'./dist',
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:["babel-loader"],
                
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
            test:/\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}