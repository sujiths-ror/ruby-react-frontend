module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   * 
   * 
   */

  presets: ["@babel/env"], // "@babel/preset-env"
  plugins: ["@babel/transform-arrow-functions"],
  BUILDPACK_CLEAR_CACHE=1,
  apps : [

    // First application
    {
      name      : 'demo',
      script    : 'yarn',
      args      : 'run start:production',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

};
