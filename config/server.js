module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080 ),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4e5172a4f08275cdc8800187e6432385'), 
    },
  },
});
