// const crypto = require('crypto')
// const { transform } = require('@babel/core')

// module.exports = {
//   process(src, filename) {
//     const result = transform(src, {
//       sourceMap: 'inline',
//       filename,
//       presets: [
//         [require('@babel/preset-env'), { targets: { node: 16 }}],
//         require('@babel/preset-typescript'),
//       ],
//       plugins: [],
//       babelrc: false,
//       configFile: false,
//     });
//     return result || { code: src };
//   },
//   getCacheKey(fileData) {
//     return crypto
//       .createHash('md5')
//       .update(fileData)
//       .digest('hex')
//   }
// };
