module.exports = {
    preset: "react-native",
    transformIgnorePatterns: [
      'node_modules/(?!react-native|@react-native-community|native-base-shoutem-theme)',
    ],
    transform: {
      '\\.(ts|js)x?$': 'babel-jest',
      '\\.js$': ['babel-jest', {rootMode: 'upward'}]
    },
    cacheDirectory: './tmp/cache'
  };