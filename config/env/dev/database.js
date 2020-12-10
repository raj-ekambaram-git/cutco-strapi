module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'cutco-strapi-dev.cyppfapaayzp.us-east-2.rds.amazonaws.com'),
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