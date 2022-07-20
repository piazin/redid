const path = require('path');

module.exports = {
    entry: {
        date: './public/js/date-fns.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/js/bundle')
    }
}