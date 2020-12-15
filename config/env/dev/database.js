module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'curco-strapi-dev.ci4mhwxnnrhf.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'cutcostrapi_dev'),
        username: env('DATABASE_USERNAME', 'postgres'), 
        password: env('DATABASE_PASSWORD', 'CutcoStrapi123'),
      },
      options: {
        ssl: false,
      },
    },
  },
});
