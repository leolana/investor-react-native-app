/* eslint-disable @typescript-eslint/no-var-requires */
const upstreamTransformer = require('metro-react-native-babel-transformer');

const svgTransformer = require('react-native-svg-transformer');
const typescriptTransformer = require('react-native-typescript-transformer');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith('.svg') || filename.endsWith('.sass')) {
    return svgTransformer.transform({ src, filename, options });
  } else if (filename.endsWith('.ts') || filename.endsWith('.tsx')) {
    return typescriptTransformer.transform({ src, filename, options });
  }
  return upstreamTransformer.transform({ src, filename, options });
};
