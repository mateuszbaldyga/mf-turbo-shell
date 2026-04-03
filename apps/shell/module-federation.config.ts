const deps = require('./package.json').dependencies;

export const mfConfig = {
  name: 'shell',
  remotes: { home: 'home@http://localhost:3001/remoteEntry.js', settings: 'settings@http://localhost:3002/remoteEntry.js' },
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
