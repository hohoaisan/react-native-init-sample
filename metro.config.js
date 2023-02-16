const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

const {
  resolver: { sourceExts, assetExts },
} = config

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...config.resolver,
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'cjs'],
  },
}
