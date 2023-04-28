// const crypto = require('crypto')
// const { compile } = require('@teambit/vue.dev-services.compiler.vue-sfc-compiler-core')

// const { process } = require('./jest-transform-jtsx')

// module.exports = {
//   process(code, filename) {
//     const result = compile(code, { filename, autoImportCss: true })
//     return process(result.js.code, filename)
//   },
//   getCacheKey(fileData) {
//     return crypto
//       .createHash('md5')
//       .update(fileData)
//       .digest('hex')
//   }
// }
