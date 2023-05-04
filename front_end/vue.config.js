const {defineConfig} = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    // css: {
    //     less: {
    //         lessOptions: {
    //             modifyVars: {
    //                 'primary-color': '#1abc9c',
    //                 'link-color': '#1abc9c',
    //                 'border-radius-base': '2px',
    //             },
    //             javascriptEnabled: true,
    //         }
    //     }
    // }
})
