module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './assets',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@utils': './src/utils',
          '@config': './src/config',
          '@services': './src/services',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
