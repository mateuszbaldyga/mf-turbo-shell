const deps = require('./package.json').dependencies;

export const mfConfig = {
  name: 'home',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App.tsx',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
    'react-router': {
      singleton: true,
      requiredVersion: deps['react-router'],
    },
    '@repo/ui': {
      singleton: true,
    },
    '@repo/store/': {
      singleton: true,
    },
  },
};
