const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['react-native'] = 'react-native-web';
  config.resolve.alias['react-native-maps'] = 'react-native-web-google-maps';
  config.resolve.alias['react'] = require.resolve('react');

  // Finally return the new config for the CLI to use.
  return config;
};
