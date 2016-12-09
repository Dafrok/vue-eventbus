const babel = require('rollup-plugin-babel')

module.exports = {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    moduleName: 'vueEventbus',
    plugins: [
        babel({presets: ['es2015-rollup']})
    ]
}