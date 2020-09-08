const path = require('path') 
const webpack = require('webpack')
const nodeExternals = require('webpack-node-Externals') 
const CURRENT_WORKING_DIR = process.cwd() 

const config = { 
    name: "server",
    entry: [ path.join(CURRENT_WORKING_DIR, './server/server.js') ],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_mudules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
 } 

module.exports = config