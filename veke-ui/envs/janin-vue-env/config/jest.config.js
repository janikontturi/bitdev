// /**
//  * @fileoverview
//  * 
//  * On Bit, we test Vue components using JSDOM env. At the same time, we transform
//  * CSS files, JS/TS file, and Vue SFC files accordingly.
//  * Additionally, we avoid ignoring file transformations in `node_modules` since
//  * technically your components would be tested by the generated code inside it.
//  */

// // force bit to recgonize this as dependency
// require('identity-obj-proxy')
// require('jest-environment-jsdom')

// const {
//   generateNodeModulesPattern,
// } = require('@teambit/dependencies.modules.packages-excluder');

// module.exports = {
//   // Supported file extensions.
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "vue"],
//   transform: {
//     // Transform styles into as empty object per each file.
//     "^.+\\.(css|sass|scss|less|stylus)$": require.resolve('./jest/jest-transform-assets'),
//     // Transform scripts with Babel.
//     "^.+\\.(js|jsx|ts|tsx)$": require.resolve('./jest/jest-transform-jtsx'),
//     // Transform Vue files into JavaScript with some CSS imports.
//     "^.+\\.(vue)$": require.resolve('./jest/jest-transform-vue'),
//   },
//   moduleNameMapper: {
//     // Map assets into a name proxy per each file.
//     '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': require.resolve('identity-obj-proxy'),
//   },
//   // Only transform Bit components in node_modules.
//   transformIgnorePatterns: [
//     generateNodeModulesPattern({
//       packages: [],
//       excludeComponents: true,
//     }),
//   ],
//   // Enable the JSDOM env.
//   testEnvironment: require.resolve('jest-environment-jsdom'),
//   testEnvironmentOptions: {
//     customExportConditions: ["node", "node-addons"],
//  },
// }
