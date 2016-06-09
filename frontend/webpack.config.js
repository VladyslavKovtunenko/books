module.exports = {
    entry: "./index.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};