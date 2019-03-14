module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'OilField',
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

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      port :'3000',
      host : '54.152.162.251',
      ref  : 'origin/master',
      repo : 'git@gitlab.com:oilfield-im/frontend.git',
      path : '/home/deploy/oilfield-frontend',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
