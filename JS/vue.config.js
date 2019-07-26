var path = require('path');

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        .set('globalize$', path.resolve(__dirname, 'node_modules/globalize/dist/globalize.js'))
        .set('globalize', path.resolve(__dirname, 'node_modules/globalize/dist/globalize'))
        .set('cldr$', path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'))
        .set('cldr', path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'))
    }
}